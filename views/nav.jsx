import React from 'react';
import CookingTips from './CookingTips';
import NewRecipeForm from './NewRecipeForm'


const Nav = ({ recipe }) => (
<header class="has-navbar-fixed-top">
	<nav class="navbar is-fixed-top">
	  <div class="navbar-brand">
	    <a href="/home">
	    	<img src="https://i.imgur.com/k1ZaemO.png" width='200' />
	    </a>
	    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	  </div>
	  
	  <div class="navbar-menu">
	    <div class="navbar-start">
	      <a class="navbar-item" href="/home">
	        Home
	      </a>
	      <div class="navbar-item has-dropdown is-hoverable">
	        <a class="navbar-link" href="/all-recipes">
	          Recipes
	        </a>
	        <div class="navbar-dropdown is-boxed">
	          <a class="navbar-item" href="/all-recipes">
	            Categories
	          </a>
	          <a class="navbar-item" href="/new-recipe">
	            Create Your Own Recipe
	          </a>
	          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
	            Update A Recipe
	          </a>
	          <a class="navbar-item" href="/cooking-tips">
	            Cooking Tips!
	          </a>
	          <hr class="navbar-divider" />
	        </div>
	      </div>
	    </div>
	    <div class="navbar-end">
	      <div class="navbar-item">
	        <div class="field is-grouped">
	          <p class="control">
	            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
	              <span class="icon">
	                <i class="fab fa-twitter"></i>
	              </span>
	              <span>
	                Tweet
	              </span>
	            </a>
	          </p>
	        </div>
	      </div>
	    </div>
	  </div>
	</nav>
</header>
);


export default Nav;


// <img src="https://i.imgur.com/7jZZmfn.png?1" />

