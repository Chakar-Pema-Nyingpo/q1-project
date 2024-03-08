const NAME ="name"
export default function DrinkCate({ list, setAppState, fetchCocktailData}) {
    if(list){
        const drinkDetails = list.data.map((drink) => {
        
          const details = {
            name: drink.strDrink,
            src: drink.strDrinkThumb,
            id: drink.idDrink,
          };
          return details;
        });
      
        return (
          <div className="text-center w-full h-full md:pt-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:pr-5">
            {drinkDetails.map((obj) => (
              <div key={obj.idDrink} className="">
                <div className="min-h-7 rounded-xl h-fit w-full md:gap-4 bg-[#FFE7E9] p-8 pt-6 mb-2 md:max-h-96 ">
                <button
                    className=""
                    onClick={()=>
                        {fetchCocktailData(obj.name,"search.php?s=")
                        setAppState(NAME)
                    }}>
                    <div className="md:min-h-96">
                        <img src={obj.src} className="" alt={obj.name} />
                        <p className="text-3xl font-bold text-black mt-2 trunacate">{obj.name}</p>
                    </div>   
                    </button>
                    
                </div>
             </div>
            ))}
          </div>
        );
    }
  }