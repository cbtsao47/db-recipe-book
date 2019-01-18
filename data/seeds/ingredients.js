exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Chicken" },
        { name: "Lettuce" },
        { name: "Beef" },
        { name: "Rice" },
        { name: "Flour" },
        { name: "Tomato" },
        { name: "Cabbage" },
        { name: "Basil" },
        { name: "Water" },
        { name: "Salt" },
        { name: "Vegetable oil" },
        { name: "Onion" },
        { name: "Cornstarch" },
        { name: "Mushroom" },
        { name: "Butter" }
      ]);
    });
};
