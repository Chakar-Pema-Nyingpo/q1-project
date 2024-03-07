"use client"

import { useState } from "react"
import NavBar from "./component/nav"
import SideNavBar from "./component/side-nav"


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
	if (appState === HOME){
	 fetchCocktailData("list","list.php?c=")
	//  console.log(listData)
	}

	



	return (
		<div className="bg-field bg-cover"> 

			<NavBar
		
			/>
		<div className="flex flex-col-reverse md:flex-row">
			<SideNavBar
			/>

			<div className= "text-center w-full h-full md:pt-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:pr-5 ">
				<ListComponent
					list={result}
				/>
			</div>

		</div>
	</div>
	
  );
}
 