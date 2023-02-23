import './App.css';
import sls from './sls.png';
import fdm from './fdm.png';
import sla from './sla.png'

function App() {
  return (
    <div className="App">
        <h1>3D Printing</h1>
        <h3>and the overly abitious things that follow</h3>
        <div className="Images">
          <img src={fdm} alt="fdm" />
          <img src={sls} alt="sls" />
          <img src={sla} alt="sla" />
        </div>
    </div>
  );
}

export default App;
