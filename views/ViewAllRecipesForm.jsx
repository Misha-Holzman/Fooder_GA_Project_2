import React from 'react';
import Nav from './Nav';
import DefaultLayout from './DefaultLayout';


export default ({ props }) => (
  <html>  
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
      <link rel="stylesheet" href="/css/style.css" />
    </head>
    <body>
      <Nav />
        <section class="section is-medium has-text-centered">
            <div class="container">
              <h1 class="title">
              Search
              </h1>
              <h2 class="subtitle">
              for a tasty dinner!
              </h2>
              <br/>
              <div style={{ marginLeft: '20%', marginRight: '20%' }}>
                <form method="GET" action="/recipes" >
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
            </div>
        </section>
    </body>
  </html>
);
