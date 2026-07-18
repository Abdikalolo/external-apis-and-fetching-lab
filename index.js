const { getAllByPlaceholderText } = require("@testing-library/dom");

// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!

document.addEventListener('DOMContentLoaded', () =>{
    const searchButton = document.querySelector('button')
    const inputField = document.querySelector('input')

    if (searchButton && inputField) {
    searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      const stateValue = inputField.value;
      fetchWeatherData(stateValue);
    });
  }
})