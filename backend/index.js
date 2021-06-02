const express = require("express");
const error = require("./middleware/error");
const pokemon = require("./routes/pokemon");

const app = express();

app.use(express.json());
app.use("/api/pokemon", pokemon);
app.use(error);

const port = process.env.port || 3000;

const server = app.listen(port, () =>
  console.log(`Pokemon challenge app listening at http://localhost:${port}`)
);

module.exports = server;
