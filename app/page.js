"use client"

import { useEffect, useState } from "react"
import NavBar from "./component/nav"
import SideNavBar from "./component/side-nav"
import ListDrinks from "./component/ListDrinks"


import ListComponent from "./component/ListCategory.jsx"

const NAME = "name"
const INGREDIENTS = "ingredients"
const HOME = "home"


export default function Home() {

	const [appState, setAppState] = useState(HOME)
	const [result, setResult]=useState(null)
	const [cockTailToSearchText,setCockTailToSearchText] = useState()
	const [searchParameter, setSearchParameter] = useState("list.php?c=")
	const [invalidInputWarning, setInvalidInputWarning] = useState('');
	
	// To fetch data from the cocktail DB API
	async function fetchCocktailData(cockTailToSearch,parameter) {
		try {
			// conneting with route.js and sending the parameters 
			const res = await fetch(`/api/cocktail`, {
				method:`Post`,
				body: JSON.stringify({search:cockTailToSearch, parameter:parameter})
			})
			// console.log(res)
			
			if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`);
			}
			const data = await res.json();
			console.log(data)
			// Process the JSON data
			if(data.data !== null){
				setResult(data)
				setInvalidInputWarning('')
			}else{
				setInvalidInputWarning('Invalid input. Please try again.')
			}
			

		} catch (error) {
			console.error('Error fetching data:', error.message);
		}
		
	}

	useEffect(()=>{
		if (appState === HOME){
			fetchCocktailData("list","list.php?c=")
		   //  console.log(listData)
		}
	},[appState===HOME])

	return (
		<div className="bg-field bg-cover min-h-screen"> 

			<NavBar
				appState={appState}
				setCockTailToSearchText={setCockTailToSearchText}
				cockTailToSearchText={cockTailToSearchText}
				fetchCocktailData={fetchCocktailData}
				searchParameter={searchParameter}
				setSearchParameter={setSearchParameter}
			/>
			<div className="flex flex-col-reverse md:flex-row min-h-screen">
			<SideNavBar
				appState={appState}
				setAppState={setAppState}
				setSearchParameter={setSearchParameter}
				setCockTailToSearchText={setCockTailToSearchText}
				fetchCocktailData={fetchCocktailData}
				
			/>
			{appState === HOME && searchParameter === "list.php?c=" &&(
				<h1 className="text-center text-4xl">
					Drinks Category
					<ListComponent
						list={result}
						fetchCocktailData={fetchCocktailData}
					/>
				</h1>
			)}
			{appState === NAME && searchParameter === "search.php?s=" &&(
				<h1 className="text-center text-4xl">
					Cocktails
				<ListDrinks
					list={result}
				/>
			</h1>
			)}

		{invalidInputWarning && <p className="text-red-500 mx-auto text-3xl bg-yellow-300 p-8 rounded-full">{invalidInputWarning}</p>}
		</div>
	</div>
	
  );
}
 