export function getBikes() {
    return fetch('https://rental-backend.herokuapp.com/bikedetails')
      .then(data => data.json())
  }