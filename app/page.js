"use client"

import { useState } from "react"


export default function Home() {
	const [result, setResult]=useState(null)
	// Replace YOUR_API_KEY with your actual API key if required (some APIs might require an API key).
	const API_KEY = 1;
	const API_URL = 'https://www.thecocktaildb.com/api/json/v1/' + API_KEY;

	// Function to fetch data from the Cocktail DB API
	async function fetchCocktailData(cocktailName) {
		try {
			const res = await fetch(`${API_URL}/search.php?s=${cocktailName}`);
			
			if (!res.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await res.json();
			
			// Process the JSON data
			console.log((data.drinks));
			setResult(data.drinks[0].strDrink)
			return data;
		} catch (error) {
			console.error('Error fetching data:', error.message);
		}
	}

fetchCocktailData("gin and tonic")
return (
	<div className=""> {result}</div>
);
}

