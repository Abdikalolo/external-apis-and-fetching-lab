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

function fetchWeatherData(state){
    const inputField = document.querySelector('input');
    const errDiv = document.getElementById('error-message');

    if (inputField){
        inputField.value = '';
    }

    if (!state || !state.trim()){
        displayError({ message: 'network failure'});
        return;
    }

    const STATE_ABBR = state.trim().toUppercase();
    const url = `https://api.weather.gov/alerts/active?area=${STATE_ABBR}`;

    fetch(url)
    .then(response => {
        if (!response.ok){
            throw new Error('network failure');
        }
        return response.json();
    })
    .then(data => {
        if(errorDiv){
            errorDiv.textContent = '';
            error.Div.classList.add('hidden');
        }
        displayWeather(data);
    })
    .catch(errorObject => {
        displayError(errorObject);
    })
}

const fetchWeatherAlerts = fetchWeatherData;