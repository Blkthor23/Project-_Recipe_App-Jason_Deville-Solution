import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const [form, setForm] = useState({})
  const handleChange = ({target}) => {
    setForm({
      ...form,
      [target.name]:target.value,
    })
  }
  const initRecipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe(form)
    setForm({...initRecipe})
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input type="text" name="name" placeholder="Name" onChange={handleChange}></input ></td>
            <td><input type="text" name="cuisine" placeholder="cuisine" onChange={handleChange}></input></td>
            <td><input type="url" name="photo" placeholder="URL" onChange={handleChange}></input></td>
            <td><textarea name="ingredients" placeholder="Ingredient" onChange={handleChange}></textarea></td>
            <td><textarea name="preparation" placeholder="Preparation" onChange={handleChange}></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
