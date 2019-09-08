const httpMap = {
  E1: 200,
};

const handleErrors = (err, ctx) => {
  const {code, message} = err;
  ctx.status = httpMap[code];
  ctx.body = {message};
};

module.exports = handleErrors;
