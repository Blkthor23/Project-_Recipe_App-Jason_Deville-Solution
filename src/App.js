import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  const handleDelete = (recipe) => {
    setRecipes((destroyed) => destroyed.filter((item, index) => index !== recipe))
  }
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleCreate = (newRecipe) => {
    setRecipes((currentRecipes) => {
    return [
      ...currentRecipes,
      newRecipe]
    })
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList data={recipes} destroy={handleDelete}/>
      <RecipeCreate createRecipe={handleCreate} />
    </div>
  );
}

export default App;
