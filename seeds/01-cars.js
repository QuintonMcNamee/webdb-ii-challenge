
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {make: 'honda', model: 'fit', mileage: '200000'},
        {make: 'toyota', model: 'camry', mileage: '75000'},
        {make: 'tesla', model: 'model 3', mileage: '0'}
      ]);
    });
};
