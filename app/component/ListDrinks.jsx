export default function ListDrinks({ list }) {
  if(list){
    const drinkDetails = list.data.map((drink) => {
      const details = {
        name: drink.strDrink,
        ing: [],
        mea: [],
        src: drink.strDrinkThumb,
        inst:drink.strInstructions,
      };
  
      for (const property in drink) {
        if (property.startsWith("strIngredient") && drink[property]) {
          details.ing.push(drink[property]);
        }
        if (property.startsWith("strMeasure") && drink[property]) {
          details.mea.push(drink[property]);
        }
      }
  
      return details;
    });
  
    return (
      <div className="text-center w-full h-full md:pt-8 grid grid-cols-1 gap-3 md:grid-cols-2 md:pr-5">
        {/* {console.log(drinkDetails)} */}
        {drinkDetails.map((obj, index) => (
          <div key={index} className="">
            <div className="min-h-72 md:flex rounded-xl h-fit w-full md:gap-4 bg-[#FFE7E9] p-8 pt-6 mb-2 md:grid md:grid-cols-2">
              <div className="md:h-fit ">
                <img src={obj.src} className="h-34 w-34" alt={obj.name} />
                <p className="text-2xl font-bold text-black mt-2">{obj.name}</p>
              </div>

              <hr className="md:hidden border-2 border-[#ff8791]" ></hr>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:flex justify-between md:flex-wrap">
                <div className="text-2xl italic  text-black mt-2  text-left">
                  Ingredients
              

                {obj.ing.map((ingredient, i) => (
                  <p key={i} className="text-xl text-black mt-2 text-left">
                    {i+1+") "}{ingredient} - {obj.mea[i]}
                  </p>                  
                ))}
                </div>
                
                <div className="text-2xl italic text-black mt-2 text-left">
                  Instruction
                  <p className="text-xl md:mt-2">{obj.inst}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
  