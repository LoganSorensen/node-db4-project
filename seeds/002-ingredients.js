
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Pizza Sauce'},
        {name: 'Cheese'},
        {name: 'Dough'},
        {name: 'Pepperoni'},
        {name: 'Pineapple'},
        {name: 'Jar of Smoked and Pickled Shellfish Cockles'},
        {name: 'Banana'},
        {name: 'Split'}
      ]);
    });
};
