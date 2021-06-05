const { createLogger, format, transports } = require("winston");

let logger;

const initLogger = () => {
  logger = createLogger({
    level: "info",
    transports: [
      new transports.File({ filename: "errorfile.log", level: "error" })
    ]
  });

  logger.exceptions.handle(new transports.File({ filename: "exceptions.log" }));

  logger.rejections.handle(new transports.File({ filename: "rejections.log" }));
};

exports.initLogger = initLogger;
exports.getLogger = () => logger;
