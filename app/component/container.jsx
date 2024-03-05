export default function DisplayCocktail({data}) {
    console.log(data.drinks)
    return (
        <div className="grid grid-cols-3 gap-4">
        {data.drinks.map((obj)=>{
            return (
            <div className="p-10 pb-3 border-2 bg-red-100 w-fit text-center ">
            <a>
                <div>
                <img src={obj.strDrinkThumb} className="w-64"></img>
                <a href="#"><p className="mt-3 text-lg text-black font-serif">{obj.strDrink}</p></a>
                </div>
            </a>
            </div>

            )
        })
        }
        </div>    
    )
}

	