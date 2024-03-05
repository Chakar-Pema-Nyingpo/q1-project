// "use client"

import { useEffect, useState } from "react"

import {listCategory} from "./component/list-category.jsx"

const NAME = "name"
const INGREDIENTS = "ingredients"
const LIST = "list"


export default function Home() {

	const [appState, setAppState] = useState(LIST)
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
			
// 			if (!res.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 			}
// 			const data = await res.json();
			
			// Process the JSON data
			// console.log(res);
			
			setResult(JSON.stringify(data))
			return data;
		} catch (error) {
			console.error('Error fetching data:', error.message);
		}
		
	}
	if (appState === LIST){
	 var listData= fetchCocktailData("list")
	 console.log(listData)
	}

	// useEffect(() => {

	// 	if (searchParameter !== "search.php?i=" && searchParameter !== "search.php?s=") {
	// 		fetchCocktailData(cockTailToSearchText)
	// 	}
	// }, [searchParameter])
	
	function handleClick(compo, para){
		setAppState(compo)
		setSearchParamter(para)
	}


	return (
		<div className="">
			<div>
			
				<button
					className={"border-2 rounded-full text-white px-4 mx-2 "+(appState === NAME ? "bg-sky-900" : "bg-sky-400")}
					onClick={() =>handleClick(NAME, "search.php?s=")}
					>By Name</button>

				<button
					className={"border-2 rounded-full text-white px-4 mx-2 "+(appState === INGREDIENTS? "bg-sky-900":"bg-sky-400")}
					onClick={() =>handleClick(INGREDIENTS, "search.php?i=")}
					>By Ingredients</button>

				<button
					className={"border-2 rounded-full text-white px-4 mx-2 "+(appState === LIST? "bg-sky-900":"bg-sky-400")}
					onClick={() =>handleClick(LIST,"list.php?c=")}
					>List Category</button>

				{appState === LIST ? (
					<></>
				) : (null)}
					
				{appState === NAME ? (
					
					<div className="my-5">
					<input
						className="text-black "
						placeholder="Enter Cocktail name"
						type="text"
						onChange={(e) => setCockTailToSearchText(e.target.value)}
					/>
					<button
						className="border-2 rounded-full bg-sky-500 text-black px-4 mx-2"
						onClick={() =>fetchCocktailData(cockTailToSearchText)}
						>Search
					</button>
					</div>
				) : (null)}

				{appState === INGREDIENTS ? (
					<div className="my-5">
					<input
						className="text-black "
						placeholder="Enter Ingredients name"
						type="text"
						onChange={(e) => setCockTailToSearchText(e.target.value)}
					/>
					<button
						className="border-2 rounded-full bg-sky-500 text-black px-4 mx-2"
						onClick={() =>fetchCocktailData(cockTailToSearchText)}
						>Search
					</button>
					</div>
				) : (null)}
			
			</div>
			<div>
				<div>{result}</div>
			</div>
		</div>
	);

import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchCocktail = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCocktail(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cocktail data:", error);
        setLoading(false);
      });
  };

  return (

    <>
    
    <div className="bg-field bg-cover"> 
     <nav className= "mb-2 bg-[#B66876] max-w-full h-20 flex text-nowrap pl-2 justify-between items-center">
      <div className="text-grey-500 md:text-3xl text-xl font-bold text-black flex-none">The Cocktail</div>
      <div className="md:hidden">
        <input
          className="text-center text-black focus:outline-none text-xl bg-slate-300 mx-2 w-4/5 rounded-md  "
          type="text"
          placeholder="Enter Cocktail"
          onChange={(e) => setCity(e.target.value)}
        ></input>
      <button onClick={fetchCocktail}>
        <BsSearch size={20} className="text-white pt-1" />
      </button>
      </div>

      <div className="placeholder:center md:mx-auto " >

      <div className="flex justify-between items-center max-w-[500px] w-full text-white ">
        <form
          onSubmit={fetchCocktail}
          className="md:flex hidden my-4 justify-between items-center w-full p-3 border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-1"
        >
          <div>
            <input
              className="text-center bg-transparent border-none text-black focus:outline-none text-2xl "
              type="text"
              placeholder="Enter Cocktail"
          
            ></input>
          </div>
          <button onClick={fetchCocktail}>
            <BsSearch size={20} className="text-black" />
          </button>

        </form>
      </div>

      {/* <input 
      placeholder="Enter Cocktail "
      className= " my-4 ml-64 text-center text-black italic placeholder:text-slate-400 block bg-slate-300 w-96 border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-rose-400 focus:ring-rose-400 focus:ring-1 sm:text-sm "
      >
      
      </input> */}
      

      
      </div>
    </nav>


    <div className="flex flex-col-reverse md:flex-row">
      <nav className= "md:pl-2 items-center rounded-t-[30px] bg-[#B66876] h-20 md:w-16 md:gap-4 md:h-1/2 md:py-4 flex sticky bottom-0 md:flex-col md:justify-around mt-44 md:rounded-full md:ml-2">

      <button title="Home" className="mx-auto my-2 h-14 w-14 overflow-hidden border border-[#B66876] text-rose-[#B66876] shadow-2xl transition-all duration-200 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-rose-400 before:duration-300 before:ease-out hover:text-white hover:before:h-9 hover:before:w-9 hover:before:opacity-25">
        <IoMdHome size={36} className="text-black ml-1" />
        </button>

        <button title="Cocktails" className="mx-auto my-2 h-14 w-14 overflow-hidden border border-[#B66876] text-rose-[#B66876] shadow-2xl transition-all duration-200 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-rose-400 before:duration-300 before:ease-out hover:text-white hover:before:h-9 hover:before:w-9 hover:before:opacity-25">
        <FaMartiniGlassCitrus size={36} className="text-black ml-1" />
        </button>

        <button title="Ingredients" className="md:pl-1 mx-auto my-2 h-14 w-14 overflow-hidden border border-[#B66876] text-rose-[#B66876] shadow-2xl transition-all duration-200 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-rose-400 before:duration-300 before:ease-out hover:text-white hover:before:h-9 hover:before:w-9 hover:before:opacity-25">
        <FaFilePen size={36} className="text-black ml-1" />
        </button>
      </nav>

      <div className= "text-center w-full h-full md:pl-10 md:pt-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:pr-5 ">
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
    </>
  );
}



 





