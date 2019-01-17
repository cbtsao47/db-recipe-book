exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", table => {
    table.increments();
    table
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipe");
    table
      .integer("ingredients_id")
      .unsigned()
      .references("id")
      .inTable("ingredients");
    table.string("quantity", 255);
    table
      .index(["recipe_id", "ingredients_id"])
      .unique(["recipe_id", "ingredients_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
