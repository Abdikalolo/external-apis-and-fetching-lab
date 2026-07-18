// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!

function fetchWeatherAlerts (state){
    const STATE_ABBR = state.toUppercase();
    const url = `https://api.weather.gov/alerts/active?area=${STATE_ABBR}`;
    const headers = {
         'User-Agent': '(myweatherapp.com, contact@myweatherapp.com)'
    };

    fetch (url, { headers})
    .then(Response => {
        if (!Response.ok){
            throw new Error(`HTTP error! status: ${Response.status}`);
        }
        return Response.jsoon();
    })

    .then (data => {
        console.log(`Weather alerts for ${STATE_ABBR}:`, data);
    })

    .catch(error =>{
        console.log(`Failed to fetch weather alerts for ${STATE_ABBR}:`, error.message);
    });
};