export function getGallery() {
    return fetch('https://rental-backend.herokuapp.com/gallery')
      .then(data => data.json())
      .catch(console.log("Fetch gallery API failed"))
  }