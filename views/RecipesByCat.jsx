import React from 'react';

const RecipesByCategory = ({ recipes }) => {
    return (
            <div className="jumbotron">
                <center>
                    <h2>Recipes by Category</h2>
                </center>
            </div>
            <div className="container">
                { recipes.map(({ name, yeild, calories_per_serving, total_cook_time, description, directions, }) => {
                    return (
                        <div className="column recipe">
                            <h4>{name}</h4>
                            <p>{yeild}</p>
                            <p>{calories_per_serving}</p>
                            <p>{total_cook_time}</p>
                            <p>{vegetarian}</p>
                            <p>{description}</p>
         										<p>{directions}</p>
                        </div>
                    )})
                }
            </div>
    );
};

export default RecipesByCategory;
