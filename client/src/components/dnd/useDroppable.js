import React, { useEffect, useRef, useState } from "react";
import store from "./store";

const events = {
    start: ["mousedown", "touchstart"],
    move: ["mousemove", "touchmove"],
    end: ["mouseup", "touchcancel", "touchend"]
};

function handleMouseMove() {

}

function useDroppable(droppableId) {
    const ref = useRef(null);
    
    useEffect(() => {
        register();
        return unregister;
    }, []);

    useEffect(() => {
        ref.current.droppableInfo.id = droppableId;
    }, [ droppableId ]);

    // useEffect(() => {
    //     ref.current.droppableInfo.index = index;
    // }, [ index ]);

    function register() {
        console.log("droppableref", ref);
        ref.current.droppableInfo = {
            id: droppableId,
        }
        store.add(droppableId, ref.current);
    }

    function unregister() {
        store.remove(droppableId);
    }

    return [ {}, ref ];
}
//placeholder
export default useDroppable;

//droppable detection, get position of mouseUp event
//element from point