interface IngredientItemProps {
    ingredient: string;
    measure: string;
}

export default function IngredientItem({ingredient, measure} :IngredientItemProps){

    return (
        <div className="flex flex-col items-center p-1 bg-blue-50 rounded-2xl">
            <img src={`https://www.themealdb.com/images/ingredients/${ingredient.replace(" ","%20")}-small.png`} className="w-24"/>
                {ingredient} - {measure}
        </div>
    )
};