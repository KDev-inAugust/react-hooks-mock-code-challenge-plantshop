import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {
  return (
    <ul className="cards">{
      plantList.map(
        (index)=>{
         return <PlantCard  plantList={index} key={index.id}/>
        }
      )
      }</ul>
  );
}

export default PlantList;
