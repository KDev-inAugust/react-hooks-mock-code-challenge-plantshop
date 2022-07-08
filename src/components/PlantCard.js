import React, {useState} from "react";

function PlantCard({plantList}) {
  const {id, name, image, price}=plantList
  const [inStock, setInStock] = useState(true)

  function handleInStockToggle (){
    setInStock(!inStock)
  }

  return (
    <li className="card" >
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock===true ? (
        <button onClick={handleInStockToggle} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
