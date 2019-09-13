const Ajv = require('ajv');
const ajv = new Ajv({allErrors: true, jsonPointers: true});
require('ajv-errors')(ajv);

const createValidator = schema => {
  const validate = ajv.compile(schema);
  return async (ctx, next) => {
    const {body} = ctx.request;
    if (!validate(body)) {
      ctx.status = 400;
      ctx.body = {errors: validate.errors};
    } else {
      await next();
    }
  };
};

module.exports = createValidator;
