exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", table => {
    table.increments();
    table.string("steps", 255);
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipe");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
