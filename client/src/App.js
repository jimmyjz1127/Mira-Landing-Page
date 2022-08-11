import './App.css';

// components
import Header from './Components/Layout/Header/Header.js';
import Intro from './Components/FirstBlock/Intro.js';
import MainPoints from './Components/SecondBlock/MainPoints.js';
import Aptos from './Components/ThirdBlock/Aptos';
import Partners from './Components/FourthBlock/Partners';


function App() {
  const getStyle = () => {
    return {
      backgroundImage:`url("http://localhost:5055/background")`,
      backgroundPosition:"center center",
      backgroundSize:"100% 100%",
      backgroundRepeat: "no-repeat"
    }
  }

  return (
    <div className="App" style={getStyle()}>
      <Header/>
      <div className='container' >
        <Intro/>
        <MainPoints/>
        <Aptos/>
        <Partners/>
      </div>
    </div>
  );
}

export default App;
