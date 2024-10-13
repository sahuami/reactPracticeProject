import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }) {

  const Iniial_url = "https://media.istockphoto.com/id/1457076388/vector/plasticine-3d-weather-icons-render-style-sun-cumulus-and-snowflakes-trendy-fluffy-bubbles.jpg?s=612x612&w=0&k=20&c=cOBcHF4uIdShlICEoRmoFufCjWZ9NJFzPAqk7xW8KKM="
  const Hot_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rQwF-7JvAU7oeBi3ZUdsJ2jhe8qqeMUJTw&s"
  const Cold_url = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg"
  const Rain_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zwHPwxWbk2oPvV9u7sZzJ5HZgEG7i8prIQ&s"

  const isInitialInfo = !info.city;
  return (
    <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 220 }}
          image={
            isInitialInfo
              ? Iniial_url
              : info.humidity > 80
                ? Rain_url
                : info.temp > 20
                  ? Hot_url
                  : Cold_url

          }
          title="weather img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 20
                  ? <WbSunnyIcon />
                  : <AcUnitIcon />}

          </Typography>
          <Typography variant="body2" color='text.secondary' component={"span"} >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}</p>
            <p>Max Temp = {info.tempMax}</p>
            <p>The weather can be describe as <b>{info.weather}</b> and feels like <b>{info.feelslike}&deg;C</b></p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
