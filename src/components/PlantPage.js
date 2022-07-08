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
    setPlantList([...plantList, infoForPlantToAdd ])
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
