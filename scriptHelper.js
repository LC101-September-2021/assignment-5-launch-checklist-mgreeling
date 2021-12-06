// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.textContent = "Shuttle Not Ready for Launch";
            fuelStatus.textContent = `Fuel level too low for launch`;
        } else if (cargoLevel > 10000) {
            launchStatus.style.color = "rgb(199, 37, 78)";
            launchStatus.textContent = "Shuttle Not Ready for Launch";
            fuelStatus.textContent = `Fuel level high enough for launch`;
            cargoStatus.textContent = `Cargo mass too heavy for launch`;
        } else {
            launchStatus.style.color = "rgb(65, 159, 106)";
            launchStatus.textContent = "Shuttle is Ready for Launch";
            fuelStatus.textContent = `Fuel level high enough for launch`;
            cargoStatus.textContent = `Cargo mass low enough for launch`;
        }
    });
};
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
