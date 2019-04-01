import React, { useEffect } from "react";

const DragDropContext = () => {
    function handleMove() {

    }

    useEffect(() => {
        document.addEventListener("mousemove", handleMove, false);

        return function() {
            document.removeEventListener("mousemove")
        }
    }, [])
}