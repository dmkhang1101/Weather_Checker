import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Result from './pages/Result/Result.js'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Home/>}/>
                <Route path='result' element = {<Result/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
