
exports.up = function(knex) {
  // the change we want to make to our schema
  return knex.schema.createTable('car-dealer', tbl => {
    tbl.increments();
    tbl.text('make', 128)
        .notNullable();
    tbl.text('model', 128)
        .notNullable();
    tbl.integer('mileage')
        .notNullable();
  });
};

exports.down = function(knex) {
  // undoing that change
  return knex.schema.dropTableIfExists('car-dealer');
};
