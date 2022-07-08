import React, {useState} from "react";

function NewPlantForm({handleAddPlantCard}) {

  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");

const newPlant = {
  name: name,
  image: imageURL,
  price: price
}


//----------handle the state sets for the inputs
function handleNameChange(e){
  setName(e.target.value);
  console.log(e.target.value)
}

function handleImageChange(e){
  setImageURL(e.target.value)
}

function handlePriceChange(e){
  setPrice(e.target.value);
}

//------handle form submit with function passed in from PlantPage
  function handleSubmit (e){
    e.preventDefault();
    handleAddPlantCard(newPlant)
    
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleImageChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handlePriceChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
