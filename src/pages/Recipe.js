import React, { Component } from 'react'
import RecipeCard from './RecipeCard'

export class Recipe extends Component {
    render() {
        const recipes = require('../Json/Recipes.json')
        let recipeArray = recipes.map(recipeCard => {
            return (
                <div class = "col-lg-3" style={{padding: "0"}}>
                    <RecipeCard recipeProp = {recipeCard}></RecipeCard>
                </div>
            )
        })
        return (
          <>
          <div class = "container-fluid text-center" style = {{"background": "black", "padding": "0 0 4% 0"}}>
            <div class = "text-white titleDiv" style ={{height: "4rem"}}><h3 class = "title">Our Recipes</h3></div>
            <div class = "row">
                {recipeArray}
            </div>
          </div>
          
          </>
        )
      }
}

export default Recipe