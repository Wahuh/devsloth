const outOfTheWay = 0.2;
const outOfTheWayCurve = 'cubic-bezier(0.2, 0, 0, 1)';
const outOfTheWayTiming = `${0.2}s ${outOfTheWayCurve}`;

const transitions = {
    fluid: `opacity ${outOfTheWayTiming}`,
    snap: `transform ${outOfTheWayTiming}, opacity ${outOfTheWayTiming}`,
    outOfTheWay: `transform ${outOfTheWayTiming}`,
}

const style = {
    pointerEvents: "none",
    position: "fixed",
    boxSizing: "border-box"
}

//top
//width
//left height