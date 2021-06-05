const express = require("express");
const fetch = require("node-fetch");
const { sanitazeParam } = require("../lib/utils");

const router = express.Router();

router.get("/", async (req, res) => {
  return res
    .status(400)
    .json({ error: "Name of pockemon is a required param" });
});

router.get("/:name", async (req, res, next) => {
  try {
    const name = sanitazeParam(req.params.name);
    if (name.length > 32) {
      res.status(400).json({ error: "Name can have 32 char max" });
      return;
    }

    const pokemonRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`
    );

    if (!pokemonRes.ok) {
      res.status(pokemonRes.status).json({
        error:
          pokemonRes.status == 404
            ? `There is no pokemon with name ${name}`
            : "An error occured"
      });
      return;
    }

    const pokemon = await pokemonRes.json();
    const description = pokemon.flavor_text_entries.find(
      i => i.language.name == "en"
    ).flavor_text;
    const descriptionSanitazed = description
      .replace("\n", " ")
      .replace("\f", " ");

    res.send({ name: pokemon.name, description: descriptionSanitazed });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
