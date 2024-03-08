"use client"

import { useEffect, useState } from "react"
import NavBar from "./component/nav"
import SideNavBar from "./component/side-nav"
import ListDrinks from "./component/ListDrinks"

import ListIng from "./component/ing"


import ListComponent from "./component/ListCategory.jsx"
import DrinkCate from "./component/DrinkCategory"

const NAME = "name"
const INGREDIENTS = "ingredients"
const HOME = "home"
const LIST= "list"


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
				setAppState={setAppState}
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
				onPageChange={()=>setResult(null)}
				fetchCocktailData={fetchCocktailData}
				
			/>
			{appState === HOME &&(
				<ListComponent
					list={result}
					fetchCocktailData={fetchCocktailData}
					setAppState={setAppState}
				/>		
			)}
			{appState === NAME &&(
				
				<ListDrinks
					list={result}
				/>
			)}
			{appState === INGREDIENTS &&(
				<ListIng
					list={result}
				/>
			)}{appState === LIST && (
				<DrinkCate
					list={result}
					setAppState={setAppState}
					fetchCocktailData={fetchCocktailData}
				/>	
			)}	
			{console.log(appState)}
		{invalidInputWarning && <p className="text-[#ff0000] bg-[#ff8791] h-fit p-5 w-full mx-28 text-3xl ">{invalidInputWarning}</p>}
		</div>
	</div>
	
  );
}
 