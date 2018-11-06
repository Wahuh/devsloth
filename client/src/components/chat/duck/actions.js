import { CHANGE_CHANNEL } from "./types";

export const changeChannel = (channel) => {
    return {
        type: CHANGE_CHANNEL,
        name: channel.name
    }
}