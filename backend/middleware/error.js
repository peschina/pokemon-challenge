module.exports = (err, req, res, next) => {
  // log error
  res.status(500).json({ error: "Whoops. Looks like something failed" });
};
