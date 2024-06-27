const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = today.getFullYear();

const temp = document.getElementById("temperature");
const windspeed = document.getElementById("windspeed");
const windchill = document.getElementById("windchill");
const temp_value = 10;
const windspeed_value = 5;


const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified;

temp.innerHTML = `<strong>Temperature</strong>: ${temp_value}°C`;
windspeed.innerHTML = `<strong>Wind Speed</strong>: ${windspeed_value}km/h`;

const calculateWindChill = (temp, windspeed) => {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * (windspeed ** 0.16)) +
        (0.3965 * temp * (windspeed ** 0.16))
    ).toFixed(2);
};

// windchill.addEventListener("load", () => {
//     windchill.innerHTML =
//       temp_value <= 10 && windspeed > 4.8
//         ? `<strong>Wind Chill</strong>: ${calculateWindChill(
//             temp,
//             windspeed
//           )}°C`
//         : "<strong>Wind Chill</strong>: N/A";
// })

windchill.innerHTML =
  (temp_value <= 10) && (windspeed_value > 4.8)
    ? `<strong>Wind Chill</strong>: ${calculateWindChill(temp_value, windspeed_value)}°C`
    : "<strong>Wind Chill</strong>: N/A";



