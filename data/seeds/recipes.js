exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Asian Apple Slaw", dish_id: 1 },
        { name: "Spicy Carrot Salad", dish_id: 1 },
        { name: "Fried Chicken Wing", dish_id: 1 },
        { name: "Chicken Marsala", dish_id: 2 },
        { name: "Chicken Fried Rice", dish_id: 2 },
        { name: "Orange Chicken", dish_id: 2 },
        { name: "Taiwanese Popcorn Chicken", dish_id: 2 },
        { name: "Beef Soup", dish_id: 3 },
        { name: "Cabbage Soup", dish_id: 3 },
        { name: "Mushroom Soup", dish_id: 3 },
        { name: "Tamato Basil Soup", dish_id: 3 },
        { name: "Tortilla Soup", dish_id: 3 }
      ]);
    });
};
