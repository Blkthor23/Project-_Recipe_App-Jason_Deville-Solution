import React, { useState, useRef } from "react";

function RecipeCreate({ createRecipe }) {
  const namesRef = useRef();
  const cusineRef = useRef();
  const urlRef = useRef();
  const ingredientRef = useRef();
  const prepRef = useRef();
  const [form, setForm] = useState({});

  const handleChange = ({ target }) => {
    const item = target.value.trim();
    if (item.length > 0) {
      setForm({
        ...form,
        [target.name]: item,
      });
    }
  };
  const initRecipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(form);
    setForm({ ...initRecipe });
    namesRef.current.value = null;
    cusineRef.current.value = null;
    urlRef.current.value = null;
    ingredientRef.current.value = null;
    prepRef.current.value = null;
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                ref={namesRef}
                type="text"
                name="name"
                placeholder="Name"
                required={true}
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                ref={cusineRef}
                type="text"
                name="cuisine"
                placeholder="cuisine"
                onChange={handleChange}
                required={true}
              ></input>
            </td>
            <td>
              <input
                ref={urlRef}
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                required={true}
              ></input>
            </td>
            <td>
              <textarea
                ref={ingredientRef}
                name="ingredients"
                placeholder="Ingredient"
                onChange={handleChange}
                required={true}
              ></textarea>
            </td>
            <td>
              <textarea
                ref={prepRef}
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                required={true}
              ></textarea>
            </td>
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
