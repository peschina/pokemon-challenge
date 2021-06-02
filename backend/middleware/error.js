module.exports = (err, req, res, next) => {
    // log error
    res.status(500).send("Whoops. Looks like something failed");
  }