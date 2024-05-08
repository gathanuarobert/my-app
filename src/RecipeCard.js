import React from 'react'

const RecipeCard = ({recipe}) => {
    const {image, label, cuisine,
         dietLabel, mealtype, uri} = recipe?.recipe
         console.log(uri)
    const id = uri?.split('#')[1]     
  return (
    <div>RecipeCard</div>
  )
}

export default RecipeCard