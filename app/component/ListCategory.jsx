const LIST= "list"
export default function ListComponent({
    list,
	fetchCocktailData,
    setAppState
}) {
    if (!list) return <></>
    // console.log(list+"here")
    return(
    <h1 className="text-center text-4xl">
    Drink Category
    <div className= "text-center w-full h-full md:pt-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:pr-5 ">
     {list.data.map((obj)=>{
       if(obj.strCategory == "Soft Drink"){
            return(
                <div key="1" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                    onClick={()=>
                        {fetchCocktailData(obj.strCategory,"filter.php?c=")
                        setAppState(LIST)
                    }}>
                    <img
                        className="h-34 w-34" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qxrvqw1472718959.jpg"
                    />
                    <p className="text-xl text-black mt-2 ">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Beer"){
            return(
                <div key="2" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 p-6 mb-2">
                    <button
                        onClick={()=>
                            {fetchCocktailData(obj.strCategory,"filter.php?c=")
                            setAppState(LIST)
                        }}>
                    <img
                        className="" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xxyywq1454511117.jpg"
                        />
                    <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Ordinary Drink"){
            return(
                <div key="3" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                       onClick={()=>
                        {fetchCocktailData(obj.strCategory,"filter.php?c=")
                        setAppState(LIST)
                    }}>

                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rrtssw1472668972.jpg"
                            />
                        <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Cocktail"){
            return(
                <div key="4" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                   onClick={()=>
                    {fetchCocktailData(obj.strCategory,"filter.php?c=")
                    setAppState(LIST)
                }}>

                    <img
                        className="h-34 w-34" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yqvvqs1475667388.jpg"
                        />
                    <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Shake"){
            return(
                <div key="5" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                        onClick={()=>
                            {fetchCocktailData(obj.strCategory,"filter.php?c=")
                            setAppState(LIST)
                        }}>
                    <img
                        className="h-34 w-34" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rvwrvv1468877323.jpg"
                        />
                    <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Cocoa"){
            return(
                <div key="6" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                    onClick={()=>
                        {fetchCocktailData(obj.strCategory,"filter.php?c=")
                        setAppState(LIST)
                    }}>

                    <img
                        className="h-34 w-34" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/3nbu4a1487603196.jpg"
                        />
                    <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Shot"){
            return(
                <div key="7" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                    onClick={()=>
                        {fetchCocktailData(obj.strCategory,"filter.php?c=")
                        setAppState(LIST)
                    }}>

                    <img
                        className="h-34 w-34" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yyrwty1468877498.jpg"
                        />
                    <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Coffee / Tea"){
            return(
                <div key="8" className=" min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                    onClick={()=>
                        {fetchCocktailData(obj.strCategory,"filter.php?c=")
                        setAppState(LIST)
                    }}>

                    <img
                        className="h-34 w-34" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ryvtsu1441253851.jpg"
                        />
                    <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Homemade Liqueur"){
            return(
                <div key="9" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                    onClick={()=>
                        {fetchCocktailData(obj.strCategory,"filter.php?c=")
                        setAppState(LIST)
                    }}>

                    <img
                        className="h-34 w-34" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uxxtrt1472667197.jpg"
                        />
                    <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Punch / Party Drink"){
            return(
                <div key="10" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                    onClick={()=>
                        {fetchCocktailData(obj.strCategory,"filter.php?c=")
                        setAppState(LIST)
                    }}>

                    <img
                        className="h-34 w-34" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tpxurs1454513016.jpg"
                        />
                    <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }else if(obj.strCategory == "Other / Unknown"){
            return(
                <div key="11" className="min-h-72  rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                    <button
                    onClick={()=>
                        {fetchCocktailData(obj.strCategory,"filter.php?c=")
                        setAppState(LIST)
                    }}>

                    <img
                        className="h-34 w-34" 
                        src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqxyxx1472719737.jpg"
                        />
                    <p className="text-xl text-black mt-2">{obj.strCategory}</p>
                    </button>
                </div>
            )
        }
      }) }
     </div>
     </h1>
    )
 }
 