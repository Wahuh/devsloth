import { CHANGE_DISPLAY_MODE } from "./actionTypes"

function changeDisplayMode(mode) {
    return {
        type: CHANGE_DISPLAY_MODE,
        mode: mode,
    }
}