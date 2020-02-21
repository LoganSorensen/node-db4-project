exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Pizza" },
        { name: "Banana Split" },
        { name: "Smoked and Pickled Shellfish Cockles" }
      ]);
    });
};
