import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Searchbar from './Searchbar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from './utils'

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('Vegan')
  const [limit, setlimit] = useState(30)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const fetchRecipe = async() => {
   try{
      const data = await fetchRecipes({query, limit})

      setRecipes(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
  } finally {
      setLoading(false)
  }
}

useEffect(() => {
  setLoading(true)

  fetchRecipe()
}, [])
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className='w-full'>
      <div className='w-full flex items-centre
      justify-centre pt-10 pb-5 px-0 md:px-10'>
        <form className='w-full lg:w-2/4'>
          <Searchbar placeholder="eg. Stew,
          Rice"
            handleInputChange={handleChange} />
        </form>

      </div>
      {
        recipes?.length > 0 ? (
          <>
            <div className='w-full flex
            flex-wrap gap-10 px-0 lg:px-10
            py-10'>{
              recipes?.map((item, index) => (
                <RecipeCard recipes={recipes} key={index} />
              ))
            }</div>
          </>
        ) : <div className='text-white w-full
        items-centre justify-centre py-10'>
          <p className='text-centre'>No Recipe Found</p>
        </div>
      }
    </div>
  )
}

export default Recipes;