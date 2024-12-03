import { useState } from 'react'

function Main() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map((ingredient, key) => (
        <li key={ingredient} className='leading-10'>{ingredient}</li>
    ))


    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient')
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    
    return (
        <main className="px-8 pt-8 pb-3 mx-auto max-w-2xl text-[#141413]">
            <form 
                className="flex justify-center gap-3 h-10 mb-4" 
                action={addIngredient}>

                <input 
                    name="ingredient" 
                    className="rounded-md border border-[#8e9299] px-4 py-2 grow min-w-40 " 
                    type="text" 
                    placeholder="e.g. tomato" />

                <button 
                    className="font-inter rounded-md border-none bg-[#141413] text-[#FAFAF8] before:content-['+'] before:mr-1.5 text-sm font-medium px-10">
                    Add ingredient
                </button>

            </form>

            {
                ingredients.length > 0 && <section>
                    <h2 className='font-semibold text-3xl mb-6'>Ingredients on hand:</h2>
                    <ul className='list-disc ml-8 text-[#475467] mb-12'>{ingredientsListItems}</ul>

                    {
                        ingredients.length > 3 && <div className='rounded-xl bg-[#F0EFEB] px-10 py-7 flex justify-between items-end'>
                            <div>
                                <h3 className='font-medium text-lg mb-2'>Ready for a recipe?</h3>
                                <p className='text-[#6b7280] text-sm'>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button className='bg-[#d17557] text-[#fafaf8] py-2 px-4 rounded-md'>Get a recipe</button>
                        </div>
                    }
                    
                </section>
            }

        </main>
    )
}

export default Main