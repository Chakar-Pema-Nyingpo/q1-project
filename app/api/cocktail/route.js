const BASE_URL ='https://thecocktaildb.com/api/json/v1'
const API_KEY= process.env.API_KEY
// const searchParameter="search.php?s="

export async function POST(request){
    const {search, parameter} = await request.json();
    // console.log(search, parameter)
    const encodedSearch=encodeURIComponent(search)
    console.log(`${BASE_URL}/${API_KEY}/${parameter}${encodedSearch}`)
    
    const res = await fetch(`${BASE_URL}/${API_KEY}/${parameter}${encodedSearch}`,{
        method: 'post',
        body: JSON.stringify({query: search}),
        headers:{
            "content-type":"application/json"
        }
    })
    const data= await res.json()
        // console.log(data +"down here")
        return new Response(JSON.stringify({ data: data?.drinks }), {
            headers: {
                "content-type": "application/json"
            },
            status: res.status
        });
};