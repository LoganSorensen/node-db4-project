
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: '1', instructions: 'Open jar', recipe_id: 3 },
        {step_number: '2', instructions: 'Serve', recipe_id: 3 },
        {step_number: '1', instructions: 'Acquire Banana', recipe_id: 2 },
        {step_number: '2', instructions: 'Liberally apply the split', recipe_id: 2 },
        {step_number: '1', instructions: 'Construct the Pizza', recipe_id: 1 },
        {step_number: '2', instructions: 'Apply the Ingredients', recipe_id: 1 },
        {step_number: '3', instructions: 'Bake', recipe_id: 1 },
        {step_number: '4', instructions: "Mama Mia! That's a spicy pizza!", recipe_id: 1 },
      ]);
    });
};


// select recipes.name as Recipe
//     , ingredients.name as Ingredients
//     , ri.quantity
//     ,steps.instructions
// FROM recipe_ingredients as ri
// INNER JOIN recipes ON ri.recipe_id = recipes.id
// INNER JOIN ingredients ON ri.ingredient_id = ingredients.id
// INNER JOIN steps ON ri.recipe_id = steps.recipe_id