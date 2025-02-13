const asyncHandler = (fn) => {
  return Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
