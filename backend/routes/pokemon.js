const express = require("express");
const router = express.Router();

const fetch = require("node-fetch");

router.get("/:name", async (req, res) => {
  const name = req.params.name;
  if (name.length > 32) {
    res.status(400).send("Name can have 32 char max");
    return;
  }

  const pokemonRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );

  if (pokemonRes.status != 200) {
    res
      .status(pokemonRes.status)
      .send(
        pokemonRes.status == 404
          ? `There is no pokemon with name ${name}`
          : "An error occured"
      );
    return;
  }
  const pokemon = await pokemonRes.json();
  const description = pokemon.flavor_text_entries.find(
    i => i.language.name == "en"
  ).flavor_text;

  res.send({ name: pokemon.name, description });
});

module.exports = router;
