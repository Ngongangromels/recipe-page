import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './componant/rcp.css'
import { Recipe } from './componant/recipe';
import { getRecipeById } from './server';
import { TRecipe } from './type/type-element';

function App() {
  const [recipe, setRecipe] = useState<TRecipe | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const recipe = await getRecipeById("1")
      setTimeout(() => {
        setRecipe(recipe)
        setLoading(false)
      }, 2000 )
    }) ()
  }, [])
  
  return <div className='App'>{loading ? <p classeName='loading'>Loading....</p> : <Recipe recipe={recipe!}/> } </div>
  

  

}

export default App;
