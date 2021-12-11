// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTarget = document.getElementById("missionTarget");
   
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}


function validateInput(testInput) {
    let input ="";
    if (typeof testInput === 'string'){
        input = testInput.trim();
    };
    let numberInput = Number(testInput)
    if (input === ""){
        return "Empty";
    } else if (isNaN(numberInput)){
        return "Not a Number";
    } else{
        return "Is a Number";
    }
 }

 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
         
        let inputArray = [pilot, copilot, fuelLevel, cargoMass];
        let validInputs = {
            pilot: "Not a Number",
            copilot: "Not a Number",
            fuelLevel: "Is a Number",
            cargoMass: "Is a Number"
        };
        let validInputsArray = ['pilot', 'copilot', 'fuelLevel', 'cargoMass'];
        
            for (let i=0; i< inputArray.length; i++){
            let key = validInputsArray[i];
            let validated = validateInput(inputArray[i]);
            if (validated === validInputs[key]){
                continue;
            }else if (validated === "Empty") {
                alert("Please include all information");
                return;
            }else if (validated !== validInputs[key]){
                alert("Make sure to enter Names for Pilots and Numbers for Fuel and Cargo");
                return;
            }
           
        }
     
      
        let launchStatus = document.getElementById("launchStatus");
        let pilotName = document.getElementById("pilotStatus"); 
        let copilotName = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById( "cargoStatus");
    
        
        
        let fuel = Number(fuelLevel);
        let cargo = Number(cargoMass);
    
        
        pilotName.textContent = `Pilot ${pilot} is ready for launch`;
        copilotName.textContent = `Co-pilot ${copilot} is ready for launch`;


      
        if (fuel < 10000 || cargo > 10000){
            list.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.textContent = "Shuttle not ready for launch";
        } else {
            list.style.visibility = "visible";
            launchStatus.style.color = "green"
            launchStatus.textContent = "Shuttle is ready for launch"
        }
         
    
        if (fuel < 10000){
            fuelStatus.textContent = "Fuel level to low for launch";
        } else{
            fuelStatus.textContent = "Fuel level high enough for launch";
        };
        if (cargo > 10000){
            cargoStatus.textContent = "Cargo mass to heavy for launch" ; 
        } else {
            cargoStatus.textContent = "Cargo mass low enough for launch";
        };
        
}

// retrieve planet list.
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
    });

    return planetsReturned;
}

// choose a random planet.
function pickPlanet(planets) {
    let planet = Math.floor(Math.random() * planets.length);

    return planets[planet];
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;