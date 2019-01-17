exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", table => {
    table.increments();
    table.string("name", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dish");
};
