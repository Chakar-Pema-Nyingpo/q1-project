"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(null);
  const [cockTailToSearchText, setCockTailToSearchText] = useState("");

  // To fetch data from the cocktail DB API
  async function fetchCocktailData(cockTailToSearch) {
    try {
      // conneting with route.js and sending the parameters
      const res = await fetch(`/api/cocktail`, {
        method: `Post`,
        body: JSON.stringify({ search: cockTailToSearch }),
      });
      // console.log(res)

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await res.json();

      // Process the JSON data
      console.log(data);

      setResult(JSON.stringify(data));
      // return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  return (
    <div className="">
      <div>
        <input
          className="text-black "
          placeholder="enter cocktail name"
          type="text"
          onChange={(e) => setCockTailToSearchText(e.target.value)}
        ></input>
        <button
          className="border-2 rounded-full bg-sky-500 text-black"
          onClick={() => fetchCocktailData(cockTailToSearchText)}
        >
          Search
        </button>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}
