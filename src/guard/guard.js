module.exports = async (req, res, next) => {
  let isValidUser = true;
  if (isValidUser) {
    req.person = {
      person: 1,
      name: 'Yosef',
      email: 'yosefmarr@gmail.com',
      password: '123'
    };
    return next();
  }
  return res.status(403).json({
    message: 'Unauthorized'
  });
};
