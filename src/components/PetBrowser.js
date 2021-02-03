import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  
  

  const petObjects = pets.map(pet => {
    return <Pet id={pet.id} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} name={pet.name} isAdopted={pet.isAdopted} />
  })
  return <div className="ui cards">{petObjects}</div>;
}

export default PetBrowser;
