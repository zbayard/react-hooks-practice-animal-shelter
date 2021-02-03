import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  console.log(filters.type)
  
  function handleFilterChange(e) {
   let userInput = e.target.value
   setFilters({type: userInput})
   
  }

  function handleFindPetsClick() {
    if(filters.type === "all"){
      fetch('http://localhost:3001/pets')
      .then(response => response.json())
      .then(data => setPets(data));
    }else{
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(response => response.json())
      .then(data => setPets(data));
    }
  }

  function handleAdoption(){
    
  }
  

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onFindPetsClick={handleFindPetsClick} onChangeType={handleFilterChange} />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={handleAdoption} pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
