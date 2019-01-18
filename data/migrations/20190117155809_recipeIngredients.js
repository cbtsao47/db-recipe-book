exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", table => {
    table.increments();
    table
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
    table
      .integer("ingredients_id")
      .unsigned()
      .references("id")
      .inTable("ingredients");
    table.float("quantity");
    table
      .index(["recipe_id", "ingredients_id"])
      .unique(["recipe_id", "ingredients_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
