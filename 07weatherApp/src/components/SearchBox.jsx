
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [City, setCity] = useState("");
    let [error, setError] = useState(false);

    const Api_Url = "https://api.openweathermap.org/data/2.5/weather";
    const Api_Key = "71e7cae9375b639aa5c89ec8fd7e0b2e";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${Api_Url}?q=${City}&appid=${Api_Key}&units=metric`);
            if (!response.ok) {
                // If the response is not OK, set the error to true
                setError(true);
                return;
            }
            let jsonResponse = await response.json();
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            setError(false); // Reset error state on successful fetch
            return result;
        } catch (err) {
            setError(true);
            console.error("Error fetching weather data:", err);
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false); // Reset error state when the user starts typing
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(City);
        setCity("");
        let NewInfo = await getWeatherInfo();
        if (NewInfo) {
            updateInfo(NewInfo);
        }
    };

    return (
        <div className="SearchBox" style={{ marginTop: "5rem" }}>
            <h2>WHAT IS THE WEATHER OF :</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={City}
                    onChange={handleChange}
                />
                <br /> <br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <h3 style={{ color: "red" }}>No Data exist!</h3>}
            </form>
        </div>
    );
}
