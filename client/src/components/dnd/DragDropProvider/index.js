import React, { useState, useRef, useEffect } from "react";
import DragDropContext from "../DragDropContext";
import store from "../store";
import { setTranslate3d } from "../helpers";
const dragContainer = document.createElement("div");
dragContainer.id = "drag-container";
const dot = document.createElement("div");
dot.style.position = "fixed";
dot.style.height = "3px";
dot.style.width = "3px";
dot.style.backgroundColor = "green";
dot.style.zIndex = 10000;
const dot2 = document.createElement("div");
dot2.style.position = "fixed";
dot2.style.height = "3px";
dot2.style.width = "3px";
dot2.style.backgroundColor = "purple";
dot2.style.zIndex = 10000;
dragContainer.appendChild(dot2);
dragContainer.appendChild(dot);
const events = {
    end: ['touchend', 'touchcancel', 'mouseup'],
    // move: ['touchmove', 'mousemove'],
    start: ['touchstart', 'mousedown'],
};

const findClosestDraggable = (el) => {
    while(el) {
        if (el.meta != null) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}

const DragDropProvider = ({ children, onDragStart, onDragUpdate, onDragEnd }) => {
    const ref = useRef(null);
    useEffect(() => {

        if (ref) {
            document.body.appendChild(dragContainer);
            ref.current.addEventListener("mousedown", handleMouseOrTouch, false);
            ref.current.addEventListener("touchstart", handleMouseOrTouch, false)
        }

        return function() {
            if (ref) {
                ref.current.removeEventListener("mousedown", handleMouseOrTouch);
                ref.current.removeEventListener("touchstart", handleMouseOrTouch);
            }
        }
    }, [])

    function handleMouseOrTouch(event) {
        const isTouch = (event.touches && event.touches.length) || (event.changedTouches && event.changedTouches.length);
        if (!isTouch && event.button !== 0) return;
        //interactive check for input
        if (isTouch) {

        } else {
            document.addEventListener("mousemove", handleMouseMove, false);
            // document.addEventListener("mouseup", handleMouseUp, false);
        }
        const draggableElement = findClosestDraggable(event.target);
        if (draggableElement) {
            handleStart(
                draggableElement,
                isTouch ? event.touches[0].clientX : event.clientX,
                isTouch ? event.touches[0].clientY : event.clientY,
            );
        }
    }

    function handleStart(element, clientX, clientY, index) {
        const rect = element.getBoundingClientRect();
        cache.centerX = rect.left + rect.width / 2;
        cache.centerY = rect.top + rect.height / 2;
        cache.height = rect.height;
        cache.clone = element.cloneNode(true);
        cache.clone.style.position = "fixed";
        cache.clone.style.pointerEvents = "none";
        cache.clone.style.boxSizing = "border-box";

        cache.clone.style.top = `${rect.top}px`;
        cache.clone.style.left = `${rect.left}px`;
        cache.clone.style.zIndex = 5000;
        cache.clone.style.backgroundColor = "red";
        cache.startX = clientX;
        cache.startY = clientY;

        cache.ghost = element;
        cache.ghost.style.opacity = 0;
        cache.ghost.style.visibility = "hidden";

        cache.originalSource = element.meta.droppableId;
        cache.source = element.meta.droppableId;
        dragContainer.appendChild(cache.clone);
        source.index = element.meta.index;
        source.droppableId = element.meta.droppableId;
    }
    // calculateOffsets = () => {
    //     this.topOffsets = this.getChildren().map(
    //       item => item.getBoundingClientRect().top
    //     );
    //     this.itemTranslateOffsets = this.getChildren().map(item =>
    //       getTranslateOffset(item)
    //     );
    //   };
    function handleMouseMove(event) {
        event.cancelable && event.preventDefault();
        handleMove(event.clientX, event.clientY);
    }

    const cache = {
        clone: null, //clone of the original node which will be dragged
        tempIndex: null,
        centerX: null,
        centerY: null,
        ghost: null, //reference to original node which will be hidden while clone is dragged

        prevIndex: null,
        nextIndex: null,
        prevDirection: null,
        
        startX: null,
        startY: null,
        height: null,

        moveX: null,
        moveY: null,

        //where the click happened on draggable, make sure to move cursor back
        offsetX: null,
        offsetY: null,
        initialSibling: null,
        currentSibling: null,
        isGrabbed: false, //holds mousedown context until first mousemove
        
        originalSource: null,
        source: null, //droppable where the drag was initiated
        destination: null, //droppable where the draggable was dropped,
    };


    const source = {
        index: 0,
        droppableId: ""
    };
    let destination = {
        index: 0,
        droppableId: ""
    };
    let prevDestination = {
        index: 0,
        droppableId: ""
    };

    function handleMove(clientX, clientY) {
        setTranslate3d(cache.clone, clientX - cache.startX, clientY - cache.startY);
        //get the height of the dragg ele
        //get center pos of dragged ele
        const offsetX = cache.startX - cache.centerX;
        const offsetY = cache.startY - cache.centerY;
        const centerX = clientX - offsetX;
        const centerY = clientY - offsetY;
        dot.style.top = `${centerY}px`;
        dot.style.left = `${centerX}px`;
        const elements = document.elementsFromPoint(centerX, centerY);
        const draggable = elements.find(el => el.meta);
        if (draggable) {
            console.log("meta", draggable.meta, cache.ghost.meta);
            console.log(draggable.meta.index, draggable.meta.droppableId);
            console.log("destinationbefore", destination);
            destination.index = draggable.meta.index;
            destination.droppableId = draggable.meta.droppableId;
            //then perform a sort

            const rect = draggable.getBoundingClientRect();
            if(rect.left <= centerX && centerX <= rect.right && rect.top <= centerY && centerY <= rect.bottom ) {
                if (destination.droppableId !== source.droppableId) {
                    if (prevDestination.droppableId === destination.droppableId) {
                        //not the original droppable but same destination as last time
                        //previously, the draggable moved to prevDestination.index
                        //now the draggable moves to destination.index += 1
                        const orderedElements = store.getOrderedElements(destination.droppableId);
                        if (destination.index + 1 > prevDestination.index) {
                            //it moved down the list to destination.index + 1
                            orderedElements.forEach((el, i) => {
                                if (i < destination.index + 1) {
                                    console.log("index2", i, "up");
                                    setTranslate3d(el, 0, -(cache.height * 2));
                                } else {
                                    setTranslate3d(el, null);
                                }
                            });
                        }

                    }
                    console.log(destination.index, destination.droppableId);
                    //the draggable has been moved to a new droppable
                    const orderedElements = store.getOrderedElements(destination.droppableId);
                    //open up a space for draggable in this new droppable
                    //move all elements above the new index down
                    orderedElements.forEach((el, i) => {
                        if (i >= destination.index) {
                            console.log("index2", i, "moved down");
                            setTranslate3d(el, 0, cache.height);
                        } else {
                            setTranslate3d(el, null);
                        }
                    });
                    //draggable has an initial droppable id
                    //can move to same list
                    //can move to different list
                    //save desitination as prevSource
                    //if move back to initialSource
        
                    //cache prev source
    
                    //close up the hole in prev source by moving items below up 1
                    //get new index, get position of the draggable currently at the index
                    //translate ghost to this position
                    //move all items at this index down 1
                    //reset destination
                    prevDestination.index = destination.index;
                    prevDestination.droppableId = destination.droppableId;
                    destination.index = 0;
                    destination.droppableId = "";
                } else {

                    //sort in the same list
                }
            }
        }
    }
    return (
        <DragDropContext.Provider>
            <span style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column" }} ref={ref}>
                {children}
            </span>
        </DragDropContext.Provider>
    );
}

    function handleSort() {
                    //sortable
            //its the same list
            //main the order and indexs, mirror and original source
        if (draggable) {
            const rect = draggable.getBoundingClientRect();

            if(rect.left <= centerX && centerX <= rect.right && rect.top <= centerY && centerY <= rect.bottom ) {
                dot2.style.top = `${rect.top}px`;
                dot2.style.left = `${rect.left}px`;
                dot2.style.right = `${rect.left}px`;
                dot2.style.bottom = `${rect.bottom}px`;
                const orderedElements = store.getOrderedElements(draggable.meta.droppableId);
                const newIndex = orderedElements.findIndex(el => el.meta.draggableId === draggable.meta.draggableId);
                //move the current element at this index down to make space for new

                const oldIndex = orderedElements.findIndex(el => el.meta.draggableId === cache.ghost.meta.draggableId);
                if (!cache.prevIndex) {
                    cache.prevIndex = oldIndex;
                }
                
                //so prevIndex is prev position of ghost
                //find the draggable at new index then move ghost to this position
                //rearrange other items
                //new index is the element to be displaced
                if (cache.prevDirection) {

                } else {
                    if (newIndex > cache.prevIndex) {
                        //dragged down the list, anything below new index is moved
                        orderedElements.forEach((el, i) => {
                            console.log("index", el, i);
                            if (i == prevIndex) {
                                //move ele down
                                setTranslate3d(el, 0, cache.height);
                            }
                            else if (i <= newIndex) {
                                //move ele up
                                setTranslate3d(el, 0, -cache.height);
                            } else if (i > newIndex) {
                                setTranslate3d(el, null);
                            } 
                        })
                        //if move back up to original position
                                //2 < 4 move from 4 to 2 3 down, 2 down
                
                    } 
                    else if (newIndex < oldIndex) {
                        //dragged up the list
                        orderedElements.forEach((el, i) => {
                            console.log("index", el, i);
                            if (i < oldIndex && i >= newIndex) {
                                //move ele between old and new index down
                                setTranslate3d(el, 0, -cache.height);
                            } else if (i == oldIndex) {
                                setTranslate3d(el, 0, cache.height);
                            }
                            else {
                                setTranslate3d(el, null);
                            } 
                        })
                    }
                }

                // //otherwise it stayed the same position
        }
    }

    const touch = {
        isTouched: false
    };

    // const [ state, setState ] = useState({});




    function handleEnd(e) {
        // const { pageX, pageY } = e;
        // console.log(pageX, pageY);
        // const elements = document.elementsFromPoint(pageX, pageY);
        // console.log(elements, "ele");
        // const draggable = elements.find(el => el.hasAttribute("draggableid"));
        // if (draggable) {
        //     console.log("end", draggable);
        // }

        //get active node from manager
        //e is cancelable && preventdefault
        //remove all event listeners
        //call handle drag end with oldIndex and newIndex
        //item transitions?
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleEnd);
        console.log("removed");

    }


}

export default DragDropProvider;

//rules
//list dragged over when center position of draggable goes over list boundary
//draggable will move out of the way when center of dragged item moves over it's edge

export function getPosition(event) {
    if (event.touches && event.touches.length) {
      return {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY,
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      return {
        x: event.changedTouches[0].pageX,
        y: event.changedTouches[0].pageY,
      };
    } else {
      return {
        x: event.pageX,
        y: event.pageY,
      };
    }
  }