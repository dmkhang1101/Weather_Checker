
function Result() {
    const data = JSON.parse(localStorage.getItem('data'))
    const longitude = data.coord.lon
    const latitude = data.coord.lat

    // fetch(`api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=5&appid=3365e5d938ad16f6efefd335a797cfa9`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => alert(error));

    return (
      <div className="Result">
        <h1>Hello, Result</h1>
      </div>
    );
  }
  
  export default Result;