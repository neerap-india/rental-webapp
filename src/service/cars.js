export function getCars() {
    return fetch('https://rental-backend.herokuapp.com/cardetails')
      .then(data => data.json())
      .catch(console.log("Car details API failed"))
  }