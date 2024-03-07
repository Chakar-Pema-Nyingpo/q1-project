export default function ListComponent({list}, OnClick){
    if (!list) return <></>
    // console.log(list+"here")
    return(
     <>
     {list.data.map((obj)=>{
        {if(obj.strCategory == "Soft Drink"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <button
                        onClick={()=>console.log("been clicked")}>
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qxrvqw1472718959.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                        </button>
                    </div>
                    )
            }else if(obj.strCategory == "Beer"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xxyywq1454511117.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }else if(obj.strCategory == "Ordinary Drink"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rrtssw1472668972.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }else if(obj.strCategory == "Cocktail"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yqvvqs1475667388.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }else if(obj.strCategory == "Shake"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rvwrvv1468877323.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }else if(obj.strCategory == "Cocoa"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/3nbu4a1487603196.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }else if(obj.strCategory == "Shot"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yyrwty1468877498.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }else if(obj.strCategory == "Coffee / Tea"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ryvtsu1441253851.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }else if(obj.strCategory == "Homemade Liqueur"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uxxtrt1472667197.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }else if(obj.strCategory == "Punch / Party Drink"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tpxurs1454513016.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }else if(obj.strCategory == "Other / Unknown"){
                return(
                    <div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
                        <img
                            className="h-34 w-34" 
                            src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqxyxx1472719737.jpg"
                        />
                        <p className="text-black mt-2">{obj.strCategory}</p>
                    </div>
                    )
            }
        }
      })}
     </>
    )
 }
 