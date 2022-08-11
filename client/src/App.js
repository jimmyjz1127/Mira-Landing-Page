import './App.css';

// components
import Header from './Components/Layout/Header/Header.js';
import Intro from './Components/FirstBlock/Intro.js';
import MainPoints from './Components/SecondBlock/MainPoints.js';


function App() {
  const getStyle = () => {
    return {
      backgroundImage:`url("http://localhost:5000/background")`,
      backgroundPosition:"center center",
      backgroundSize:"100% 100%",
      backgroundRepeat: "no-repeat"
    }
  }

  return (
    <div className="App" style={getStyle()}>
      <Header/>
      <div className='container' >
        <img src='https://www.flaticon.com/free-icons/blockchain' className='main-points-icon'/>
        <Intro/>
        <MainPoints/>
        
      </div>
    </div>
  );
}

export default App;
