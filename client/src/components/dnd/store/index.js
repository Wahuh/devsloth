class Store {
    elements = {
        
    }

    active = null;

    get active() {
        return active;
    }

    getIndex(droppableId, draggableId) {
        return this.elements[droppableId]
        .sort((a, b) => a.meta.index - b.meta.index)
        .findIndex(el => el.meta.draggableId === draggableId)
    }

    getOrderedElements(droppableId) {
        return this.elements[droppableId]
            .sort((a, b) => a.meta.index - b.meta.index)
    }

    setActive(draggableInfo) {
        this.active = draggableInfo;
    }

    add(draggableId, droppableId, element) {
        if (!this.elements.hasOwnProperty(droppableId)) {
            this.elements[droppableId] = [];
        }
        this.elements[droppableId].push(element);
    }
    remove(draggableId, droppableId) {
        this.elements[droppableId] = this.elements[droppableId]
        .filter(el => el.meta.draggableId !== draggableId);
    }
}


let store = new Store();
export default store;