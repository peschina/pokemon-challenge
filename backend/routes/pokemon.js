const express = require("express");
const router = express.Router();

const fetch = require("node-fetch");

router.get("/:name", async (req, res) => {
  const name = req.params.name;

  const pokemonRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  const pokemon = await pokemonRes.json();
  const description = pokemon.flavor_text_entries.find(
    i => i.language.name == "en"
  ).flavor_text;

  res.send({ name: pokemon.name, description });
});

module.exports = router;
