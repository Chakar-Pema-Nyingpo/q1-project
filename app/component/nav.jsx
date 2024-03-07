import { BsSearch } from "react-icons/bs";

import { useState } from "react";

const NAME = "name"
const INGREDIENTS = "ingredients"
const HOME = "list"

export default function NavBar(){
	const [appState, setAppState] = useState(HOME)
	const [cockTailToSearchText,setCockTailToSearchText] = useState()
	const [searchParameter, setSearchParamter] = useState("list.php?c=")

	function handleClick(compo, para){
		setAppState(compo)
		setSearchParamter(para)
	}

    return (
		<nav className= "mb-2 bg-[#B66876] max-w-full h-20 flex text-nowrap pl-2 justify-between items-center md:pr-96">
			<div className="text-grey-500 md:text-3xl text-xl font-bold text-black flex-none">
				The Cocktail
			</div>
			
			{appState === HOME ? (
				<div>
					<div className="md:hidden">
						<input
							className="text-center text-black focus:outline-none text-xl bg-slate-300 mx-2 w-4/5 rounded-md  "
							type="text"
							placeholder="Enter Cocktail"
							onChange={(e) => setCockTailToSearchText(e.target.value)}
						/>
						<button onClick={()=>fetchCocktailData(cockTailToSearchText,"search.php?s=")}>
							<BsSearch size={20} className="text-white pt-1" />
						</button>
					</div>
					<div className="placeholder:center md:mx-auto" >
						<div className="flex justify-between items-center max-w-[500px] w-full text-white ">
							<form
								onSubmit={()=>fetchCocktailData(cockTailToSearchText,"search.php?s=")}
								className="md:rounded-full md:flex hidden my-4 justify-between items-center w-full p-3 border border-slate-300 py-2 pl-7 pr-3 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-1">
								<div>
									<input
										className="md:pr-4 text-center bg-transparent border-none text-black focus:outline-none text-2xl "
										type="text"
										onChange={(e) => setCockTailToSearchText(e.target.value)}
										placeholder="Enter Cocktail"
									/>
								</div>
								<button onClick={()=>fetchCocktailData(cockTailToSearchText)}>
									<BsSearch size={20} className="text-black" />
								</button>
							</form>
						</div>
					</div>
			</div>
			) : (null)}
				
			{appState === NAME ? (
				<div>
					<div className="md:hidden">
						<input
							className="text-center text-black focus:outline-none text-xl bg-slate-300 mx-2 w-4/5 rounded-md  "
							type="text"
							placeholder="Enter Cocktail"
							onChange={(e) => setCockTailToSearchText(e.target.value)}
						/>
						<button onClick={()=>fetchCocktailData(cockTailToSearchText,searchParameter)}>
							<BsSearch size={20} className="text-white pt-1" />
						</button>
					</div>
					<div className="placeholder:center md:mx-auto " >
						<div className="flex justify-between items-center max-w-[500px] w-full text-white ">
							<form
								onSubmit={()=>fetchCocktailData(cockTailToSearchText,searchParameter)}
								className="md:flex hidden my-4 justify-between items-center w-full p-3 border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-1">
								<div>
									<input
										className="text-center bg-transparent border-none text-black focus:outline-none text-2xl "
										type="text"
										onChange={(e) => setCockTailToSearchText(e.target.value)}
										placeholder="Enter Cocktail"
									/>
								</div>
								<button onClick={()=>fetchCocktailData(cockTailToSearchText,searchParameter)}>
									<BsSearch size={20} className="text-black" />
								</button>
							</form>
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
							placeholder="Enter Cocktail Ingredient"
							onChange={(e) => setCockTailToSearchText(e.target.value)}
						/>
						<button onClick={()=>fetchCocktailData(cockTailToSearchText,searchParameter)}>
							<BsSearch size={20} className="text-white pt-1" />
						</button>
					</div>
					<div className="placeholder:center md:mx-auto" >
						<div className="flex justify-between items-center max-w-[500px] w-full text-white ">
							<form
								onSubmit={()=>fetchCocktailData(cockTailToSearchText,searchParameter)}
								className="md:flex hidden my-4 justify-between items-center w-full p-3 border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-1">
								<div>
									<input
										className="text-center bg-transparent border-none text-black focus:outline-none text-2xl "
										type="text"
										onChange={(e) => setCockTailToSearchText(e.target.value)}
										placeholder="Enter Cocktail Ingredient"
									/>
								</div>
								<button onClick={()=>fetchCocktailData(cockTailToSearchText,searchParameter)}>
									<BsSearch size={20} className="text-black" />
								</button>
							</form>
						</div>
					</div>
				</div>
			) : (null)}	
		</nav>
    )
}
