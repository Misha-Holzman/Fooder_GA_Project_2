// import React from 'react';
// import Nav from './Nav';
// import PropTypes from 'prop-types';
// // import DefaultLayout from './DefaultLayout';



// export default ({ recipes }) => (
//   console.log(recipes)

  


//      <div className="columns">
//      <div className="column is-one-third">
//      <h1><strong>Add a New Recipe</strong></h1>
//      <form method="POST" action="/new-recipe">

//           <div className="field">
//             <label className="label">Recipe Name</label>
//             <div className="control">
//               <input className="input" name="name" type="text" placeholder="eg. Green Eggs and Ham"/>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Recipe</label>
//             <div className="select">
//         <select name= "recipe_id">
//           {
//             recipes.map((recipe, i) => (
//               <option value={recipe.id} key={recipe.id}>{recipe.name}</option>
//               )
//             )
//           }
//         </select>
//       </div>
//       <a className="button is-primary" href="/recipes">Add New Recipe</a>
//           </div>

//           <div className="field">
//             <label className="label">Servings</label>
//             <div className="control">
//               <input className="input" name="yeild" type="integer" placeholder="e.g 5"/>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Total Cook Time</label>
//             <div className="control">
//               <input className="input" name="total_cook_time" type="integer" placeholder="e.g 1 hour"/>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Calories Per Serving</label>
//             <div className="control">
//               <input className="input" name="calories_per_serving" type="integer" placeholder="e.g 300"/>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Description</label>
//             <div className="control">
//               <input className="input" name="description" type="text" placeholder="e.g I love this recipe because..."/>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Directions</label>
//             <div className="control">
//               <input className="input" name="directions" type="text" placeholder="e.g Pre-heat the oven to 400 degrees and..."/>
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Vegetarian</label>
//             <div className="control">
//               <input className="input" name="vegetarian" type="text" placeholder="e.g false"/>
//             </div>

//           <div className="field">
//             <label className="label">Meat</label>
//             <div className="control">
//               <input className="input" name="meat" type="text" placeholder="eg. true"/>
//             </div>
//           </div>
//             <br/>

//           <div className="control">
//             <button className="button is-primary">Submit</button>
//           </div>
//         </div>
//     </form>
//     </div>

  


//   </div>
  

  

    
// );

// function newRecipe(props) {
//   console.log(props.recipes.recipies);
//   return (
//       <h1> hi </h1>


//     )
// }


// export default function AllFilms(props){
//  const list = props.recipes.recipes.map(
//   function(film,i){

//     return(
//           <div key={i}>
//           <h2>{film.title}</h2>
//           <p> {film.opening_crawl}</p>
//           </div>
//            )

//   })

//     return(
      
//       {list}
//       </div>

//        )
// }




// change routes on lines    12    and    32

//     {recipes.map(recipe =>  
    // <div>
    //     <article className="tile is-child box" >
        
    //     <h1 className="title">{recipe.title}</h1>
    //     <p>Recipe:{recipe.name}</p>
    //     <p>Yield:{recipe.yeild}</p>
    //     <p>Total Cook Time:{recipe.total_cook_time}</p>
    //     <p>Calories Per Serving:{recipe.calories_per_serving}</p>
    //     <p>Vegetarian:{recipe.vegetarian}</p>
    //     <p>Meat:{recipe.meat}</p>
    //     <p><strong>Description: </strong>{recipe.description}</p>
    //     <p><strong>Directions: </strong>{recipe.directions}</p>
     /*   <p>{}</p>
        <br/>
        <form method="POST" action={`/recipes/${recipe.id}?_method=DELETE`}>
        <input type="hidden" name="_method" value="delete"/>
        <button className="button is-primary" type="submit">Delete</button>
        </form>
        <br/>
        <a className="button is-primary" href={`/recipes/${recipe.id}`}>Edit</a>
        </article>
        <br/>
    </div>
*/

