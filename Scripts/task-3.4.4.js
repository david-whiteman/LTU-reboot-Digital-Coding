var recipe = {
    recipeTitle: "Cup of Coffee",
    servings: 1,
    ingredients: ["Coffee Beans", "Water", "Milk"],
    directions: "Boil Water. Add coffee beans to cup. Add boiling water and milk. Serve"

}

var ingredients = recipe.ingredients;

for( var index = 0; index < ingredients.length; index++) {
    document.write (ingredients[index])
}