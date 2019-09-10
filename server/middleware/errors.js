const httpMap = {
  E1: 200,
};

const handleErrors = (err, ctx) => {
  const {name, message} = err;
  ctx.status = httpMap[name];
  ctx.body = {message};
};

module.exports = handleErrors;
