const BASE_URL ='https://thecocktaildb.com/api/json/v1'
const API_KEY= process.env.API_KEY
const SEARCH_COCKTAIL="search.php?s="

export async function POST(request){
    const {search} = await request.json();
    const encodedSearch=encodeURIComponent(search)
    
    const res = await fetch(`${BASE_URL}/${API_KEY}/${SEARCH_COCKTAIL}${encodedSearch}`,{
        method: 'post',
        body: JSON.stringify({ query: search}),
        headers:{
            "content-type":"application/json"
        }
    })
    // console.log(`${BASE_URL}/${API_KEY}/${SEARCH_COCKTAIL}${encodedSearch}`)
    
    const data= await res.json()
    // console.log(data.drinks[0])
    return Response.json({data: data?.drinks[0]})
}