export default function adminCheck(isAdmin) {
  return function adminMidleware(req, res, next) {
    if (!!req.session?.isAdmin === isAdmin) {
      return next();
    }
    return res.sendStatus(403);
  };
}
