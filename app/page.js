"use client"

import { useEffect, useState } from "react"
import NavBar from "./component/nav"
import SideNavBar from "./component/side-nav"


import ListComponent from "./component/ListCategory.jsx"

const NAME = "name"
const INGREDIENTS = "ingredients"
const HOME = "home"


export default function Home() {

	const [appState, setAppState] = useState(HOME)
	const [result, setResult]=useState(null)
	const [cockTailToSearchText,setCockTailToSearchText] = useState()
	const [searchParameter, setSearchParameter] = useState("list.php?c=")
	
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
			throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await res.json();
			console.log(data)
			// Process the JSON data
			setResult(data)

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
		<div className="bg-field bg-cover"> 

			<NavBar
				appState={appState}
				setCockTailToSearchText={setCockTailToSearchText}
				cockTailToSearchText={cockTailToSearchText}
				fetchCocktailData={fetchCocktailData}
				searchParameter={searchParameter}
				setSearchParameter={setSearchParameter}
			/>
			<div className="flex flex-col-reverse md:flex-row">
			<SideNavBar
				appState={appState}
				setAppState={setAppState}
				setSearchParameter={setSearchParameter}
				setCockTailToSearchText={setCockTailToSearchText}
				fetchCocktailData={fetchCocktailData}
				
			/>
			{appState === HOME? (
				<h1 className="text-center text-4xl">
					Drinks Category
					<ListComponent
						list={result}
					/>
				</h1>
			):(null)}

		</div>
	</div>
	
  );
}
 