export default function ListDrinks({ list }) {
    const drinkDetails = list.data.map((drink) => {
      const details = {
        name: drink.strDrink,
        ing: [],
        mea: [],
        src: drink.strDrinkThumb
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
      <>
        {drinkDetails.map((obj, index) => (
          <div key={index}>
            <div className="rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
              <img src={obj.src} className="h-auto w-auto" alt={obj.name} />
              <p className="text-black mt-2">{obj.name}</p>
            </div>
            <div>
              <p>Ingredients</p>
              {/* Combine corresponding ingredients and measures */}
              {obj.ing.map((ingredient, i) => (
                <p key={i}>
                  {ingredient} - {obj.mea[i]}
                </p>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }
  