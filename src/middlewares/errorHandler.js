// Centralized error handler middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong",
    error: err.message,
  });
};

export default errorHandler;
