import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MainBody from './components/MainBody';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div>
        {/* <NavBar />
        <MainBody /> */}
        <TicTacToe 
          sizeOfBoard={3}
        />
    </div>
  )
}

export default App;
