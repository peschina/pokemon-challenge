const sanitazeParam = string =>
  string.replace(" ", "-").replace("'", "").replace(".", "");

exports.sanitazeParam = sanitazeParam;
