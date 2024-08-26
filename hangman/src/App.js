import React , {useState} from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';

import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setcorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);


  return (
    < >
      <Header/>
      <div className = "game-container">
        <Figure/>
        <WrongLetters/>
        <Word selectedWord = {selectedWord} correctLetters = {correctLetters}/>
      </div>
    </>
  );
}

export default App;
