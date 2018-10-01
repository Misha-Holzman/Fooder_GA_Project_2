import React from 'react';


const FindRecipesForm = props => (
<div style={{ marginLeft: '20%', marginRight: '20%' }}>
  <form action="/quotes" method="GET">
    <div className="field">
      <label className="label">Recipe Name</label>
      <div className="control">
        <input className="input" type="text" placeholder="e.g stir-fry" name="name" />
      </div>
    </div>

    <div class="field">
			<label class="label">Category</label>
			<div class="control has-text-centered" style={{ paddingBottom: '10px'}}>
			  <div class="select">
			    <select>
			      <option>Select Category</option>
			      <option>Seafood</option>
			      <option>Shrimp</option>
			      <option>Grill</option>
			      <option>Italian</option>
			      <option>Chicken</option>
			      <option>American</option>
			      <option>Asian</option>
			      <option>Chinese</option>
			      <option>Fish</option>
			      <option>Pasta</option>
			      <option>Mexican</option>
			    </select>
			  </div>
			</div>
		</div>

    <div className="field">
      <label className="label">Servings</label>
      <div className="control">
        <input className="input" type="text" placeholder="e.g 5" name="name" />
      </div>
    </div>

    <div className="field">
      <label className="label">Max Calories</label>
      <div className="control">
        <input className="input" type="text" placeholder="e.g 300" name="name" />
      </div>
    </div>

    <div className="field">
      <label className="label">Vegetarian</label>
      <div className="control">
        <input className="input" type="text" placeholder="e.g yes" name="name" />
      </div>
    </div>
    <hr />
    <div className="control has-text-centered">
      <input className="button is-info pull-right is-medium" type="submit"  style={{ backgroundColor: 'orange', color: 'black'}}/>
    </div>
  </form>
</div>
);


export default FindRecipesForm;



