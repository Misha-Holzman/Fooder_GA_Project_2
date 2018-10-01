import React from 'react';
import Nav from './Nav';
import FindRecipesForm from './DisplayRecipe'


export default ({ title, children }) => (
 	<html>	
 		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
    </head>
    <body>
    	<Nav />
    		<body>
				  <section class="section is-medium has-text-centered"  style={{borderBottom: 'solid orange 1px'}}>

				    <div class="container">
				      <h1 class="title" style={{}}>Your week</h1>
				      <h2 class="subtitle">
				        for delicious meals
				      </h2>
				      <br />
							<div class="columns is-centered">
					      <div class="column is-2">
					        <div class="red has-text-centered" style={{ border: 'solid orange 1px', backgroundColor: 'orange', height: '150px' }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Monday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="Log your recipe here" />
  										</div>
										</div>
					        </div>
					      </div>
					      <div class="column is-2">
					        <div class="red has-text-centered" style={{ border: 'solid orange 1px', backgroundColor: 'orange', height: '150px' }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Tuesday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="Log your recipe here" />
  										</div>
										</div>
					        </div>
					      </div>
					      <div class="column is-2">
					        <div class="red has-text-centered" style={{ border: 'solid orange 1px', backgroundColor: 'orange', height: '150px' }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Wednesday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="Log your recipe here" />
  										</div>
										</div>
					        </div>
					      </div>
					      <div class="column is-2">
					        <div class="red has-text-centered" style={{ border: 'solid orange 1px', backgroundColor: 'orange', height: '150px' }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Thursday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="Log your recipe here" />
  										</div>
										</div>
					        </div>
					      </div>
					      <div class="column is-2">
					        <div class="red has-text-centered" style={{ border: 'solid orange 1px', backgroundColor: 'orange', height: '150px' }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Friday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="Log your recipe here" />
  										</div>
										</div>
					        </div>
					      </div>
							</div>
							<div class="columns is-centered">
					      <div class="column is-3">
					        <div class="red has-text-centered" style={{ border: 'solid orange 1px', backgroundColor: 'orange', height: '150px' }}>
					         	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					         	Saturday
					         	</h2>
					         	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="Log your recipe here" />
  										</div>
										</div>
					        </div>
					      </div>
					      <div class="column is-3">
					        <div class="red has-text-centered" style={{ border: 'solid orange 1px', backgroundColor: 'orange', height: '150px' }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Sunday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="Log your recipe here" />
  										</div>
										</div>
					        </div>
					      </div>
							</div>
						</div>
				  </section>
				  <section class="section is-medium has-text-centered">
				    <div class="container">
				    	<h1 class="title">Search</h1>
				    	<h2 class="subtitle">
				    	for your favorite recipes
				    	</h2>
				    	<FindRecipesForm />
				    </div>
				  </section>
				</body>				
      <section className="section">
        <div className="container">

        </div>
      </section>
    </body>
  </html>

);





  // <div class="columns">
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
		// 					</div>
