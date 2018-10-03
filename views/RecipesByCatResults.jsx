import React from 'react';
import Nav from './Nav';
import RecipesByCategory from './RecipesByCat'



export default ({ }) => (
<html>	
 	<head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/css/style.css" />
  </head>
    <body>
    	<Nav />
			<section class="section">
				<div class="container is-fluid">
					<div class="container is-fluid" style={{ margin: '7%'}}>

					<RecipesByCategory />

					</div>
				</div>
			</section>
   	</body>
</html>
);
