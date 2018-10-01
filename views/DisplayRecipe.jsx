import React from 'react';


const FindRecipesForm = ({ recipe }) => (
<div style={{ marginRight: '13%'}}>
	<div class="field is-horizontal">
	  <div class="field-label is-normal">
	    <label class="label">Name</label>
	  </div>
	  <div class="field-body">
	    <div class="field">
	      <p class="control is-expanded has-icons-left">
	        <input class="input" type="text" placeholder="Name" />
	        <span class="icon is-small is-left">
	          <i class="fas fa-user"></i>
	        </span>
	      </p>
	    </div>
	    <div class="field">
	      <p class="control is-expanded has-icons-left has-icons-right">
	        <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com" />
	        <span class="icon is-small is-left">
	          <i class="fas fa-envelope"></i>
	        </span>
	        <span class="icon is-small is-right">
	          <i class="fas fa-check"></i>
	        </span>
	      </p>
	    </div>
	  </div>
	</div>

	
	<div class="field is-horizontal">
	  <div class="field-label is-normal">
	    <label class="label">Categories</label>
	  </div>
	  <div class="field-body">
	    <div class="field is-narrow">
	      <div class="control">
	        <div class="select is-fullwidth">
	          <select>
	            <option>Business development</option>
	            <option>Marketing</option>
	            <option>Sales</option>
	            <option>Sales</option>
	            <option>Sales</option>
	          </select>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
	
	<div class="field is-horizontal">
	  <div class="field-label">
	    <label class="label">Vegetarian?</label>
	  </div>
	  <div class="field-body">
	    <div class="field is-narrow">
	      <div class="control">
	        <label class="radio">
	          <input type="radio" name="member" />
	          Yes
	        </label>
	        <label class="radio">
	          <input type="radio" name="member" />
	          No
	        </label>
	      </div>
	    </div>
	  </div>
	</div>

	
	<div class="field is-horizontal">
	  <div class="field-label is-normal">
	    <label class="label">Yield</label>
	  </div>
	  <div class="field-body">
	    <div class="field">
	      <div class="control">
	        <input class="input" type="text" placeholder="e.g. Partnership opportunity" />
	      </div>
	      <p class="help is-danger">
	        Please enter a number between 1 and 6
	      </p>
	    </div>
	  </div>
	</div>
	
	<div class="field is-horizontal">
	  <div class="field-label is-normal">
	    <label class="label">Question</label>
	  </div>
	  <div class="field-body">
	    <div class="field">
	      <div class="control">
	        <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
	      </div>
	    </div>
	  </div>
	</div>
	
	<div class="field is-horizontal">
	  <div class="field-label">
	
	  </div>
	  <div class="field-body">
	    <div class="field">
	      <div class="control">
	        <button class="button is-primary">
	          Send message
	        </button>
	      </div>
	    </div>
	  </div>
	</div>
</div>

);

export default FindRecipesForm;