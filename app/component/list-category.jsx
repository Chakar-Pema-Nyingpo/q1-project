export default function ListComponent({list}){
    return(
     <>
     {list.data.map((srtCategory)=>{
         return(<p className="  pb-2 px-5 md:px-16">
             {Object.values(srtCategory)}
         </p>)
     })}
     </>
    )
 }

 