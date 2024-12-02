import { useState } from 'react'

function Main() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map((ingredient, key) => (
        <li key={ingredient}>{ingredient}</li>
    ))


    function handleSubmit(event) {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])

        event.currentTarget.reset()
    }

    
    return (
        <main className="px-8 pt-8 pb-3">
            <form 
            className="flex justify-center gap-3 h-10 mb-4" 
            onSubmit={handleSubmit}>
                <input name="ingredient" className="rounded-md border border-[#8e9299] px-4 py-2 grow min-w-40 max-w-md" type="text" placeholder="e.g. tomato" />
                <button className="font-inter rounded-md border-none bg-[#141413] text-[#FAFAF8] before:content-['+'] before:mr-1.5 text-sm font-medium px-10">Add ingredient</button>
            </form>
            <ul className="list-disc ml-8">
                {ingredientsListItems}
            </ul>
        </main>
    )
}

export default Main