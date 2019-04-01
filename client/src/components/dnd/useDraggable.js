import { useEffect, useState, useRef, useContext } from "react";
import store from "./store";
import DragDropContext from "./DragDropContext";
//state i need to keep..
//refs array
//which one is being dragged

function useDraggable(params) {
    const { draggableId, droppableId, index, type } = params;
    const ref = useRef(null);
    // const context = useContext(DragDropContext);
    // const { activeDraggableId } = context;
    const [ isDragging, setIsDragging ] = useState(false);

    //if a parent div style prevents render then context returns undefined

    // useEffect(() => {
    //     // console.log(context, "changed");
    //     if (activeDraggableId !== draggableId) {
    //         if (isDragging) {
    //             setIsDragging(false)
    //         }
    //         return;
    //     } else {
    //         setIsDragging(true);
    //     }
    // }, [ context ])

    useEffect(() => {
        register();
        return unregister;
    }, []);

    useEffect(() => {
        ref.current.meta.draggableId = draggableId;
    }, [ draggableId ]);

    useEffect(() => {
        ref.current.meta.droppableId = droppableId;
    }, [ droppableId ]);

    useEffect(() => {
        ref.current.meta.index = index;
    }, [ index ]);

    function register() {
        ref.current.meta = {
            draggableId,
            droppableId,
            index
        }
        store.add(draggableId, droppableId, ref.current);
    }

    function unregister() {
        store.remove(draggableId, droppableId);
    }
    
    return [ { isDragging }, ref ];
}

export default useDraggable;
