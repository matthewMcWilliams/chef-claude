function IngredientsList(props) {

    const ingredientsListItems = props.ingredients.map((ingredient, key) => (
        <li key={ingredient} className='leading-10'>{ingredient}</li>
    ))

    return (
        <section>
            <h2 className='font-semibold text-3xl mb-6'>Ingredients on hand:</h2>
            <ul className='list-disc ml-8 text-[#475467] mb-12'>{ingredientsListItems}</ul>

            {
                props.ingredients.length > 3 && <div className='rounded-xl bg-[#F0EFEB] px-10 py-7 flex justify-between items-end mb-16'>
                    <div>
                        <h3 className='font-medium text-lg mb-2'>Ready for a recipe?</h3>
                        <p className='text-[#6b7280] text-sm'>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className='bg-[#d17557] text-[#fafaf8] py-2 px-4 rounded-md' onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
            
        </section>
    )
}

export default IngredientsList