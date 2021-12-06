// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;

}

function validateInput(input) {
    if(input = ""){
        return "Empty"
    } else if(isNaN(input)){
        return "Is not a number"
    } else {
        return "Is a number"
    }
    
    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const launchStatus = document.getElementById("launchStatus");
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let inputArray = [pilot, copilot, fuelLevel, cargoMass]

        list.style.visibility = "visible";
        pilot.textContent = `Pilot ${pilot} is ready for launch`;
        copilot.textContent = `Co-pilot ${copilot} is ready for launch`;
        
        if (fuelLevel < 10000) {
            launchStatus.textContent = "Shuttle Not Ready for Launch";
            fuelStatus.textContent = `Fuel level too low for launch`;
        } else if (cargoLevel > 10000) {
            launchStatus.textContent = "Shuttle Not Ready for Launch";
            cargoStatus.textContent = `Cargo mass too heavy for launch`;
        } else {
            launchStatus.textContent = "Shuttle is Ready for Launch";
        }
    });
};
   
}

async function myFetch() {
    let planetsReturned =;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor((Math.random() * planets.length);

    return randomPlanet;
    
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
