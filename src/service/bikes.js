export function getBikes() {
    return fetch('https://rental-backend.herokuapp.com/bikedetails')
      .then(data => data.json())
      .catch(console.log("Bike details API failed"))
  }