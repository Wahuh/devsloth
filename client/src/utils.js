export function mergeObject(oldObject, newObject) {
    return { ...oldObject, ...newObject };
}

export function removeFromObject(oldObject, key) {
    const { [key]: removedItem, ...rest } = oldObject;
    return rest;
}

export function removeFromObjectByMatch(oldObject, key, value) {
    return Object.entries(oldObject)
    .filter(([k, v]) => v[key] !== value)
    .reduce((newObj, [k, v]) => {
        newObj[k] = v;
        return newObj;
    }, {});
}

export function mergeArray(oldArray, newValues) {
    return oldArray.concat(newValues);
}

export function removeFromArray(array, value) {
    if (Array.isArray(value)) return array.filter(el => value.indexOf(el) < 0)
    else return array.filter(item => item !== value);
}