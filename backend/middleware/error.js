const { getLogger } = require("../lib/logger");

module.exports = (err, req, res, next) => {
  getLogger().error({
    level: "error",
    message: err.message
  });
  res.status(500).json({ error: "Whoops. Looks like something failed" });
};
