import React from 'react';

const { Recipe, Category, Ingredient, db } = require('../models');
const { recipes, categories } = require('../data');



const FindRecipesByCatForm = recipes => (
<div style={{ marginLeft: '20%', marginRight: '20%' }}>
  <form  method="GET" action="/recipesByCategory">
   
  	<div class="field">
			<label class="label">Category</label>
			<div class="control has-text-centered" style={{ paddingBottom: '10px'}}>
			  <div class="select">
			    <div className="field">
        <div className="select">
        	<select name= "category_id">
{/*
          {
            recipes.name.map(recipe => (
              <option value={recipe.id} key={category.id}>{category.cuisine_type}</option>
          ))}
*/}
        	</select>

      	</div>
   		</div>
   		</div>
   		</div>
    <hr />
    <div className="control has-text-centered">
      <input className="button is-info pull-right is-medium" type="submit"  style={{ backgroundColor: 'orange', color: 'black'}}/>
    </div>
    </div>
  </form>
</div>
);


export default FindRecipesByCatForm;





















