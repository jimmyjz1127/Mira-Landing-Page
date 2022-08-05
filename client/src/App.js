import './App.css';

// components
import Header from './Components/Layout/Header/Header.js';
import Intro from './Components/FirstBlock/Intro.js';


function App() {
  return (
    <div className="App">
      
      <div class='container'>
        <Header/>
        <Intro/>
        
      </div>
    </div>
  );
}

export default App;
