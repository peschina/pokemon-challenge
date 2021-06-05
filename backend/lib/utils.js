const sanitazeParam = string =>
  string.replace(" ", "-").replace("'", "").replace(".", "").toLowerCase();

exports.sanitazeParam = sanitazeParam;
