export const signInUserMiddleware = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/');
    return;
  }
  next();
};
