import { createAction } from "redux-actions";
import { INVITE_ADD, INVITE_REMOVE } from "./types";
import { normalize } from "normalizr";
import schemas from "../../../schemas";


export const addInvite = createAction(INVITE_ADD);
export const removeInvite = createAction(INVITE_REMOVE);