export default function Main() {
    const ingredient = ["Chicken", "Oregano", "Tomato"]
    const ingredientListItems = ingredient.map(ingredient =>(
         <li key={ingredient}>{ingredient}</li>)
    )
    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredient.push(newIngredient)
        
    }
  return (
    <main>
        <form onSubmit={handleSubmit} className="add-ingredient-form">
            <input
                name="ingredient"
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient" />
            <button type="submit"> Add ingredient</button>
        </form>
        <ul>
            {ingredientListItems}
        </ul>
    </main>
  )
}