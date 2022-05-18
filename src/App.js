import logo from './logo.svg';
import './App.css';
import SimpleContainer from './componnents/SimpleContainer/SimpleContainer';
import ResponsiveAppBar from './componnents/ResponsiveAppBar/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
     <SimpleContainer/>
    </div>
  );
}

export default App;
