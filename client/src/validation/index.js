
export class Field {
    constructor(label) {
        this.label = label;
    }

    constraints = {};

    email() {
        this.constraints.email = true;
        return this;
    }

    string() {
        this.constraints.string = true;
        return this;
    }

    min(value) {
        this.constraints.min = value;
        return this;
    }

    max(value) {
        this.constraints.max = value;
        return this;
    }

    required() {
        this.constraints.required = true;
        return this;
    }

    lowercase() {
        this.constraints.lowercase = true;
        return this;
    }

    success(message) {
        this.success = message;
        return this; 
    }
}

const isString = str => ((typeof str === 'string') || (str instanceof String)) ? null : `must be a valid string`;
const isMin = (str, val) => str.length >= val ? null : `must be ${val} characters minimum`;
const isMax = (str, val) => str.length <= val ? null : `must be ${val} characters maximum`;
const isRequired = str => str.trim() ? null : `is required`;
const isEmail = str => {
    const re = /\S+@\S+\.\S+/;
    return re.test(str) ? null : "is invalid";
}


const validationMap = {
    "string": isString,
    "min": isMin,
    "max": isMax,
    "required": isRequired,
    "email": isEmail,
}

export const validateField = (input, field) => {
    const { constraints, success, label } = field;
    const keys = Object.keys(constraints);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const errorMessage = validationMap[key](input, constraints[key]);
        if (errorMessage) return { error: true, message: `${errorMessage}` };
    }
    return { error: false, message: success }
}

export const validate = (input, schema) => {
    const validation = {};
    const keys = Object.keys(schema);
    let problem = false;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const result = validateField(input[key], schema[key]);
        const { error, message } = result;
        if (error) {
            validation[key] = result;
            problem = true;
        } 
    }
    return problem ? validation : null;
}