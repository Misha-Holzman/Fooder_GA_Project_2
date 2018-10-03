import React from 'react';
import Nav from './Nav';
import FindRecipesByCatForm from './DisplayRecipeForm'


export default ( props ) => (
 	<html>	
 		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
      <link rel="stylesheet" href="/css/style.css" />
      <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lobster|Permanent+Marker" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Bungee+Shade|Roboto" rel="stylesheet" />
    </head>
    <body className="bgImage">
    	<Nav />
    		<body>
				  <section class="section is-medium has-text-centered"  style={{borderBottom: 'solid orange 1px'}}>
				  	<h2>{ Object.keys(props._locals) }</h2>
				    <div class="container">
				      <h1 class="title" style={{}}>Your week</h1>
				      <h2 class="subtitle" className="coolH2">
				        for delicious meals
				      </h2>
				      <br />
							<div class="columns is-centered">
					      <div class="column is-2" className="calander">
					        <div class="red has-text-centered" style={{ 
					        		border: 'solid orange 1px', 
					        		backgroundColor: 'orange', 
					        		height: '150px', 
					        		borderRadius: '15px', 
					        		paddingLeft: '10px', 
					        		paddingRight: '10px' 
					        }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Monday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="To cook:" />
  										</div>
										</div>
					        </div>
					      </div>
					      <div class="column is-2" className="calander">
					        <div class="red has-text-centered" style={{ 
					        		border: 'solid orange 1px', 
					        		backgroundColor: 'orange', 
					        		height: '150px', 
					        		borderRadius: '15px', 
					        		paddingLeft: '10px', 
					        		paddingRight: '10px' 
					        }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Tuesday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="" />
  										</div>
										</div>
					        </div>
					      </div>
					      <div class="column is-2" className="calander">
					        <div class="red has-text-centered" style={{ 
					        		border: 'solid orange 1px', 
					        		backgroundColor: 'orange', 
					        		height: '150px', 
					        		borderRadius: '15px', 
					        		paddingLeft: '10px', 
					        		paddingRight: '10px' 
					        }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Wednesday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="" />
  										</div>
										</div>
					        </div>
					      </div> 
					      <div class="column is-2" className="calander">
					        <div class="red has-text-centered" style={{ 
					        		border: 'solid orange 1px', 
					        		backgroundColor: 'orange', 
					        		height: '150px', 
					        		borderRadius: '15px', 
					        		paddingLeft: '10px', 
					        		paddingRight: '10px' 
					        }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Thursday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="" />
  										</div>
										</div>
					        </div>
					      </div>
					      <div class="column is-2" className="calander">
					        <div class="red has-text-centered" style={{ 
					        		border: 'solid orange 1px', 
					        		backgroundColor: 'orange', 
					        		height: '150px', 
					        		borderRadius: '15px', 
					        		paddingLeft: '10px', 
					        		paddingRight: '10px' 
					        }}>
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Friday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="" />
  										</div>
										</div>
					        </div>
					      </div>
							</div>
							<div class="columns is-centered">
					      <div class="column is-3" className="calander">
					        <div class="red has-text-centered" style={{ 
					        		border: 'solid orange 1px', 
					        		backgroundColor: 'orange', 
					        		height: '150px', 
					        		borderRadius: '15px', 
					        		paddingLeft: '10px', 
					        		paddingRight: '10px' 
					        }}>
					         	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					         	Saturday
					         	</h2>
					         	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="" />
  										</div>
										</div>
					        </div>
					      </div>
					      <div class="column is-3" className="calander">
									<div class="red has-text-centered" style={{ 
					        		border: 'solid orange 1px', 
					        		backgroundColor: 'orange', 
					        		height: '150px', 
					        		borderRadius: '15px', 
					        		paddingLeft: '10px', 
					        		paddingRight: '10px' 
					        }}>					        	
					        	<h2 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
					        	Sunday
					        	</h2>
					        	<div class="field">
  										<label class="label">Recipe:</label>
  										<div class="control">
  										  <input class="input" type="text" placeholder="" />
  										</div>
										</div>
					        </div>
					      </div>
							</div>
						</div>

						<img src="https://i.imgur.com/K6dzi6K.png" width='100px' style={{ paddingTop: '70px' }}/>
				  </section>
				  <section class="section is-medium has-text-centered">
				    <div class="container" style={{ borderRadius: '200px', backgroundColor: 'white', width: '30%', padding: '50px 50px' }}>
				    	<h1 class="title">Search</h1>
				    	<h2 class="subtitle" className="coolH2">
				    	for your favorite recipes
				    	</h2>

				    	<FindRecipesByCatForm />
				    

				    </div>
				  </section>
				</body>				
    </body>
  </html>

);

console.log('hello')



  // <div class="columns">
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
  // 							<div class="column is-2" style={{border: 'solid orange 1px'}}>is-2</div>
		// 					</div>
