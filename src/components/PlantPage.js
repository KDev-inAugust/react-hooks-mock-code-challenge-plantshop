import React ,{useState, useEffect}from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList]=useState([]);
 
  

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res=>res.json())
    .then(data=>setPlantList(data))
  
  },[])

  //-------the add card function

  function handleAddPlantCard (infoForPlantToAdd){
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       name: infoForPlantToAdd.name,
       image: infoForPlantToAdd.image,
      price: infoForPlantToAdd.price 
      })
    })
      .then((res)=>res.json())
      .then(data=>setPlantList([...plantList, data]))
        ;
  }

  //-----------the search functionality
  
  
  
  function handleSearch(value){
    if (value===""){
      fetch("http://localhost:6001/plants")
      .then(res=>res.json())
      .then(data=>setPlantList(data))
    }
    else {let basedOnSearch = plantList.filter(
     (index)=>index.name.toLowerCase().includes(value.toLowerCase())
    )
    setPlantList(basedOnSearch); console.log(value)}

    
  }

 

  return (
    <main>
      <NewPlantForm handleAddPlantCard={handleAddPlantCard}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plantList={plantList} />
    </main>
  );
}

export default PlantPage;


// function handleSearch (value){
//   const basedOnSearch = plantList.filter(
//     (index)=>{
//       if (value=false){
//         setPlantList(plantList);
//         console.log("1")
//       }

//       else {console.log("2"); return index.name.toLowerCase().includes(value)}
//     }
//   )
//     setPlantList(basedOnSearch)
// }