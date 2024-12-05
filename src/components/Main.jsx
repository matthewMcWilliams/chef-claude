import { useState } from 'react'

import ClaudeRecipe from './ClaudeRecipe.jsx'
import IngredientsList from './IngredientsList.jsx'

function Main() {
    const [ingredients, setIngredients] = useState(['number1', 'number2', 'number3', 'number4'])
    const [recipeShown, setRecipeShown] = useState(false)


    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function getRecipe() {
        setRecipeShown(true)
    }

    
    return (
        <main className="px-8 pt-8 pb-3 mx-auto max-w-2xl text-[#141413] font-inter">
            <form 
                className="flex justify-center gap-3 h-10 mb-4" 
                action={addIngredient}>

                <input 
                    name="ingredient" 
                    className="rounded-md border border-[#8e9299] px-4 py-2 grow min-w-40 " 
                    type="text" 
                    placeholder="e.g. tomato" />

                <button 
                    className="rounded-md border-none bg-[#141413] text-[#FAFAF8] before:content-['+'] before:mr-1.5 text-sm font-medium px-10">
                    Add ingredient
                </button>

            </form>

            {
                ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            }

            {
                recipeShown && <ClaudeRecipe />
            }

        </main>
    )
}

export default Main