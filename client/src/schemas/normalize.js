import { normalize } from "normalizr";
import userSchema from "./userSchema";

export function normalizeInitialState(data) {
    const normalizedData = normalize(data, userSchema);
    let newResult = {}
    Object.entries(normalizedData.entities).forEach(
        ([key, value]) => newResult[key] = Object.keys(value)
    );
    console.log("True norm", normalizedData)
    return {
        ...normalizedData,
        result: newResult
    };
}