const express = require("express");
const pokemon = require("./routes/pokemon");

const app = express();

app.use(express.json());
app.use("/api/pokemon", pokemon);

const port = 3000;

const server = app.listen(port, () =>
  console.log(`Pokemon challenge app listening at http://localhost:${port}`)
);

module.exports = server;
