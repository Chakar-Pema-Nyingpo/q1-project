"use client"
import { BsSearch } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import { useState } from "react"


import ListComponent from "./component/ListCategory.jsx"

const NAME = "name"
const INGREDIENTS = "ingredients"
const HOME = "list"


export default function Home() {

	const [appState, setAppState] = useState(HOME)
	const [result, setResult]=useState(null)
	const [cockTailToSearchText,setCockTailToSearchText] = useState()
	const [searchParameter, setSearchParamter] = useState("list.php?c=")
	
	// To fetch data from the cocktail DB API
	async function fetchCocktailData(cockTailToSearch) {
		try {
			// conneting with route.js and sending the parameters 
			const res = await fetch(`/api/cocktail`, {
				method:`Post`,
				body: JSON.stringify({search:cockTailToSearch, parameter:searchParameter})
			})
			// console.log(res)
			
			if (!res.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await res.json();
			
			// Process the JSON data
			setResult(data)

		} catch (error) {
			console.error('Error fetching data:', error.message);
		}
		
	}
	if (appState === HOME){
	 fetchCocktailData("list")
	//  console.log(listData)
	}

	
	function handleClick(compo, para){
		setAppState(compo)
		setSearchParamter(para)
	}


	return (
		<div className="bg-field bg-cover"> 
		<nav className= "mb-2 bg-[#B66876] max-w-full h-20 flex text-nowrap pl-2 justify-between items-center">
			<div className="text-grey-500 md:text-3xl text-xl font-bold text-black flex-none">
				The Cocktail
			</div>
			
			{appState === HOME ? (
				<div className="md:hidden">

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
						<button onClick={fetchCocktailData(cockTailToSearchText)}>
							<BsSearch size={20} className="text-white pt-1" />
						</button>
					</div>
					<div className="placeholder:center md:mx-auto " >
						<div className="flex justify-between items-center max-w-[500px] w-full text-white ">
							<form
								onSubmit={fetchCocktailData(cockTailToSearchText)}
								className="md:flex hidden my-4 justify-between items-center w-full p-3 border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-1">
								<div>
									<input
										className="text-center bg-transparent border-none text-black focus:outline-none text-2xl "
										type="text"
										onChange={(e) => setCockTailToSearchText(e.target.value)}
										placeholder="Enter Cocktail"
									/>
								</div>
								<button onClick={fetchCocktailData(cockTailToSearchText)}>
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
						<button onClick={fetchCocktailData(cockTailToSearchText)}>
							<BsSearch size={20} className="text-white pt-1" />
						</button>
					</div>
					<div className="placeholder:center md:mx-auto " >
						<div className="flex justify-between items-center max-w-[500px] w-full text-white ">
							<form
								onSubmit={fetchCocktailData(cockTailToSearchText)}
								className="md:flex hidden my-4 justify-between items-center w-full p-3 border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-1">
								<div>
									<input
										className="text-center bg-transparent border-none text-black focus:outline-none text-2xl "
										type="text"
										onChange={(e) => setCockTailToSearchText(e.target.value)}
										placeholder="Enter Cocktail Ingredient"
									/>
								</div>
								<button onClick={fetchCocktailData(cockTailToSearchText)}>
									<BsSearch size={20} className="text-black" />
								</button>
							</form>
						</div>
					</div>
				</div>
			) : (null)}	
			</nav>

		<div className="flex flex-col-reverse md:flex-row">
			<div className= "text-center w-full h-full md:pt-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:pr-5 ">
				<div className=" rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
					<img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg" className="h-auto w-auto">
					</img>
					<p className="text-black mt-2"> margarita </p>
				</div>
				<div className="rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
					<img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg" className="h-34 w-34">
					</img>
					<p className="text-black mt-2"> margarita </p>
				</div>
				<div className="rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
					<img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg" className="h-34 w-34">
					</img>
					<p className="text-black mt-2"> margarita </p>
				</div>
				<div className="rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
					<img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg" className="h-34 w-34">
					</img>
					<p className="text-black mt-2"> margarita </p>
				</div>
				<div className="rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
					<img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg" className="h-34 w-34">
					</img>
					<p className="text-black mt-2"> margarita </p>
				</div>
				<div className="rounded-xl h-fit w-full bg-[#FFE7E9] p-8 pt-6 mb-2">
					<img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg" className="h-34 w-34">
					</img>
					<p className="text-black mt-2"> margarita </p>
				</div>
			</div>
		</div>
	</div>
  );
}
