import React from 'react';

// const { Recipe, Category, Ingredient, db } = require('../models');
// const { recipes, categories } = require('../data');

// let theData
// fetch('localhost:3000/categories')
// .then(res => res.json())
//   .then(data => {
//     theData = data
//     console.log('!>!>>!>!>!>>!>!>', theData)
//   })

const FindRecipesByCatForm = props => ( 
<div style={{ marginLeft: '20%', marginRight: '20%' }}>

  <form  method="GET" action="/recipesByCategory">

    <div class="field">
      <label class="label">Category</label>
      <div class="control has-text-centered" style={{ paddingBottom: '10px'}}>
        <div class="select">
			    <div className="field">
            <div className="select">
                
              <select name= "cuisine_type">

                <option value='select'>Select Category</option>

                <option>

                 
              {
                // const mappingFunction = r => r.cuisine_type;

                // const cuisine = categories.categories.map(mappingFunction);
                // cuisine.map( ({ cuisine_type, id }) => <option value={ id }>{ cuisine_type }</option>  ) 
              } 

                </option>

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


