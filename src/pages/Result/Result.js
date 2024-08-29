
function Result() {
    const data = JSON.parse(localStorage.getItem('data'))
    const forecast = JSON.parse(localStorage.getItem('forecast'))
    
    return (
      <div className="Result">
        <h1>Hello, Result</h1>
      </div>
    );
  }
  
  export default Result;