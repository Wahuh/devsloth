export function setTranslate3d(element, offsetX, offsetY) {
    if (offsetY === null || offsetX === null) {
        element.style.removeProperty('transform');
        return;
    }
    element.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
}