import React, {useState} from "react";

function Pet({id, type, gender, age, weight, name, isAdopted, onAdoptPet}) {

  const [adoptionStatus, setAdoptionStatus] = useState(false)
  
  function handleAdoption(id){
    setAdoptionStatus(!adoptionStatus)
    console.log(adoptionStatus)
    console.log(id)
    // would i call onAdoptPetHere?
    

  }
  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {gender === 'male' ? '♀' : '♂'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
          
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? <button className="ui disabled button">Already adopted</button> : 
        <button onClick={handleAdoption} className="ui primary button">Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
