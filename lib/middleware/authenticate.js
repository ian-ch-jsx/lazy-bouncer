const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // Check for the session cookie and verify its contents using jsonwebtoken
  try {
    const { session } = req.cookies;
    const payload = jwt.verify(session, process.env.JWT_SECRET);
    // then assign the payload to req.user
    req.user = payload;

    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};
