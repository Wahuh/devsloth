function wrapAsync(fn) {
    return async (req, res, next) => {
        try {
            await fn(req, res);
        } catch(err) {
            next(err)
        }
    };
}

exports.wrapAsync = wrapAsync;