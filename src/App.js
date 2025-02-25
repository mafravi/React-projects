import logo from './logo.svg';
import './App.css';
import Accordian from "./components/accordian";
import RandomColor from './random-color';
import StarRating from './components/accordian/star-rating';

function App() {
  return (
    <div className="App">
      <StarRating numOfStars={10}/>
    </div>
  );
}

export default App;
