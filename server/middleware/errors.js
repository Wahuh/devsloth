const httpMap = {
  E100: 200,
};

const handleErrors = (err, ctx) => {
  const {name, message} = err;
  const status = httpMap[name] || 500;
  ctx.status = status;
  ctx.body = {
    errors: [
      {status, message: status === 500 ? 'Something blew up :(' : message},
    ],
  };
};

module.exports = handleErrors;
