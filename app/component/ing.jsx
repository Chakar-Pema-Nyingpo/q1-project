export default function ListIng({ list }) {
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
            <div className="min-h-72 rounded-xl h-full w-full md:gap-4 bg-[#FFE7E9] p-8 pt-6 mb-2">
              <div className="md:h-fit ">
                <img src={obj.src} className="h-full w-full" alt={obj.name} />
                <p className="text-2xl font-bold text-black mt-2">{obj.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  