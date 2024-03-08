import { IoMdHome } from "react-icons/io";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import { useState } from "react";

const NAME = "name"
const INGREDIENTS = "ingredients"
const HOME = "home"

export default function SideNavBar({
	appState,
	setAppState,
	setSearchParameter,
	onPageChange,
}) {
	
	
	function handleClick(compo, para){
		setAppState(compo)
		setSearchParameter(para)
		onPageChange(null)
	}

    return (
			
		<nav className= "items-center rounded-t-[30px] bg-[#B66876] h-20 md:w-16 md:h-1/2 flex sticky bottom-0 md:flex-col md:justify-around mt-44 md:rounded-full md:mx-2">

			<button 
			title="Home" 
			onClick={()=>handleClick(HOME,"list.php?c=")}
			className={"md:pl-1 rounded-full mx-auto my-2 h-14 w-14 border border-[#B66876] "+(appState===HOME? "bg-[#ff8791]":"")}
			>
				<IoMdHome size={36} className="text-black md:ml-1 ml-2" />
			</button>

			<button 
			title="Cocktails" 
			onClick={()=>handleClick(NAME,"search.php?s=")}
			className={"pl-2 rounded-full mx-auto h-14 w-14 "+(appState===NAME? "bg-[#ff8791]":"")}
			>
				<FaMartiniGlassCitrus size={36} className="text-black ml-1" />
			</button>

			<button 
			title="Ingredients" 
			onClick={()=>handleClick(INGREDIENTS,"filter.php?i=")}
			className={"rounded-full pl-3 mx-auto my-2 h-14 w-14 "+(appState===INGREDIENTS? "bg-[#ff8791]":"")}
			>
				<FaFilePen size={32} className="text-black ml-1" />
			</button>
	 		</nav>

    )
}
