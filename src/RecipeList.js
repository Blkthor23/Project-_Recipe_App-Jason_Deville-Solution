import React from "react";

function RecipeList({data, destroy}) {


  const display = (
    data.map((info, index) => (
      <tr key={index}>
        <td>{info.name}</td>
        <td>{info.cuisine}</td>
        <td><img src={info.photo} style={{objectFit:"scale-down", width:"100%", height:"100%"}}/></td>
        <td className="content_td"><p>{info.ingredients}</p></td>
        <td className="content_td"><p>{info.preparation}</p></td>
        <td><button name="delete" type="button" onClick={() => destroy(index)}>delete</button></td>
      </tr>)
  ))

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {display}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
