import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import './Result.css';

function Result() {
    const data = JSON.parse(localStorage.getItem('data'))
    const forecast = JSON.parse(localStorage.getItem('forecast'))

    const WeatherCard = (props) => {
      let d = new Date();
      d = new Date(d.getTime());
      const date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length===2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length===2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length===2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length===2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";

      return (
        <Card sx={{ minWidth: 275, borderRadius: 5 }}>
          <CardContent>
            <Typography gutterBottom sx={{fontSize: 25, color:'#009dff'}}>
              {props.obj.dt_txt? props.obj.dt_txt : date_format_str}
            </Typography>
            <Typography variant="h5">
              {props.obj.weather[0].description}
            </Typography>
            <Typography sx={{ color: 'text.secondary'}}>
              Temperature: {props.obj.main.temp}
            </Typography>
            <Typography sx={{ color: 'text.secondary'}}>
              Feels like: {props.obj.main.feels_like}
            </Typography>
            <Typography sx={{ color: 'text.secondary'}}>
              Humidity: {props.obj.main.humidity}
            </Typography>
            <Typography sx={{ color: 'text.secondary'}}>
              Wind Speed: {props.obj.wind.speed}
            </Typography>
          </CardContent>
        </Card>
      )
    }
    return (
      <div className="Result">
        <div className= "title">
          <h1>Current Weather Forecast</h1>
          <h1>Location: {data.name}</h1>
        </div>
        <WeatherCard obj={data}/>
        <h1>5-Day Weather Forecast</h1>
        <Grid container display="flex" direction='row' spacing={8} sx={{maxHeight: '600px', overflowX: 'auto'}}>
          {forecast.map(obj => {
            return (
              <WeatherCard obj={obj} />
            )
          })}
        </Grid>
      </div>
    );
  }

  export default Result;