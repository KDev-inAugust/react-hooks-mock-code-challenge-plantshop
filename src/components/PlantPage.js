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

  return (
    <main>
      <NewPlantForm handleAddPlantCard={handleAddPlantCard}/>
      <Search />
      <PlantList plantList={plantList} />
    </main>
  );
}

export default PlantPage;
