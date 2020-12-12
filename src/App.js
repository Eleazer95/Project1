import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import Game from './component/Game';
import Layout from './component/Layout';

function App() {
  return (
    <div className="App">
      <Box/>
      <checkWinner/>
      <Game/>
    </div>
  );
}

export default App;
