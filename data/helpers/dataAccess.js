const db = require("../dbConfig");

module.exports = {
  getDishes: async () => {
    let query = await db("dishes");
    console.log(query);
    return query;
  },
  getDish: async id => {
    if (id) {
      const result = await db("dishes").where({ id });
      return result;
    }
    return [];
  },
  getRecipes: async () => {
    let query = await db("recipes");
    return query;
  },
  addDish: async dish => {
    const result = await db("dishes").insert(dish);
    return result;
  },
  addRecipe: async recipe => {
    let result = await db("recipes").insert(recipe);
    return result;
  }
};
