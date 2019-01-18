const express = require("express");
const route = express.Router();

const db = require("../data/helpers/dataAccess");

route.get("/", async (req, res) => {
  try {
    const result = await db.getRecipes();
    res.json(result);
  } catch (err) {
    res.send("err");
  }
});

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.getRecipes(id);
    if (result.length) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Error" });
  }
});

route.post("/:id", async (req, res) => {
  const { body } = req;
  try {
    const result = await db.addRecipe(body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "internal error" });
  }
});

module.exports = route;
