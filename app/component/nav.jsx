import { BsSearch } from "react-icons/bs";

const NAME = "name"
const INGREDIENTS = "ingredients"
const HOME = "home"
const LIST ="list"

export default function NavBar({
	appState,
	setAppState,
	setCockTailToSearchText,
	cockTailToSearchText,
	fetchCocktailData,
	searchParameter,
	setSearchParameter,

}) {
    return (
		<nav className= "mb-2 bg-[#B66876] max-w-full h-20 flex text-nowrap pl-2 justify-between items-center">
			<div className="text-grey-500 md:text-3xl text-3xl font-bold text-black flex-none">
				The Cocktail
			</div>
			
			{appState === HOME || appState === LIST? (
				<div>
					<div className="md:hidden">
						<input
							className="text-center text-black focus:outline-none text-xl bg-slate-300 mx-2 w-4/5 rounded-md  "
							type="text"
							placeholder="Enter Cocktail"
							onChange={(e) => setCockTailToSearchText(e.target.value)}
						/>
						<button onClick={()=> {
							fetchCocktailData(cockTailToSearchText,"search.php?s=")
							setAppState(NAME)
						}}>
							<BsSearch size={20} className="text-white pt-1" />
						</button>
					</div>
					<div className="placeholder:center md:mr-96 md:ml-20" >
						<div className="flex justify-between items-center max-w-[500px] w-full text-white ">
							<div className="md:rounded-full md:flex hidden my-4 justify-between items-center w-full p-3 border border-slate-300 py-2 pl-7 pr-3 hover:bg-[#ff8791]">
								<input
									className="md:pr-4 text-center bg-transparent border-none text-black focus:outline-none text-2xl "
									type="text"
									onChange={(e) => setCockTailToSearchText(e.target.value)}
									placeholder="Enter Cocktail"
								/>
								<button onClick={()=> {
									fetchCocktailData(cockTailToSearchText,"search.php?s=")
									setAppState(NAME)
								}}>
									<BsSearch size={20} className="text-black" />
								</button>
							</div>	
						</div>
					</div>
			</div>
			) : (null)}
				
			{appState === NAME ? (
				<div>
					<div className="md:hidden ">
						<input
							className="text-center text-black focus:outline-none text-xl bg-slate-300 mx-2 w-4/5 rounded-md  "
							type="text"
							placeholder="Enter Cocktail"
							onChange={(e) => setCockTailToSearchText(e.target.value)}
						/>
						<button onClick={()=>
						{fetchCocktailData(cockTailToSearchText,searchParameter)
						}}>
							<BsSearch size={20} className="text-white pt-1" />
						</button>
					</div>
					
					<div className="placeholder:center md:mr-96 md:ml-20" >
						<div className="flex justify-between items-center max-w-[500px] w-full text-white ">
							<div className="md:rounded-full md:flex hidden my-4 justify-between items-center w-full p-3 border border-slate-300 py-2 pl-7 pr-3 hover:bg-[#ff8791]">
								<input
									className="md:pr-4 text-center bg-transparent border-none text-black focus:outline-none text-2xl "
									type="text"
									onChange={(e) => setCockTailToSearchText(e.target.value)}
									placeholder="Enter Cocktail"
								/>
								<button onClick={()=>
								{fetchCocktailData(cockTailToSearchText,searchParameter)
								}}>
									<BsSearch size={20} className="text-black" />
								</button>
							</div>	
						</div>
					</div>
			</div>
			) : (null)}

			{appState === INGREDIENTS ? (
				<div>
					<div className="md:hidden">
						<input
							className="text-center text-black focus:outline-none text-xl bg-slate-300 mx-2 w-4/5 rounded-md  "
							type="text"
							placeholder="Enter Ingredient"
							onChange={(e) => setCockTailToSearchText(e.target.value)}
						/>
						<button onClick={()=>
						{fetchCocktailData(cockTailToSearchText,searchParameter)
						}}>
							<BsSearch size={20} className="text-white pt-1" />
						</button>
					</div>
					
					<div className="placeholder:center md:mr-96 md:ml-20" >
						<div className="flex justify-between items-center max-w-[500px] w-full text-white ">
							<div className="md:rounded-full md:flex hidden my-4 justify-between items-center w-full p-3 border border-slate-300 py-2 pl-7 pr-3 hover:bg-[#ff8791]">
								<input
									className="md:pr-4 text-center bg-transparent border-none text-black focus:outline-none text-2xl "
									type="text"
									onChange={(e) => setCockTailToSearchText(e.target.value)}
									placeholder="Enter Ingredient"
								/>
								<button onClick={()=>
								{fetchCocktailData(cockTailToSearchText,searchParameter)
								}}>
									<BsSearch size={20} className="text-black" />
								</button>
							</div>	
						</div>
					</div>
					
				</div>
			) : (null)}	
		</nav>
    )
}
