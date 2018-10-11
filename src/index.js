import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
var _ = require('lodash');


ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));


// function Clicker({ handleClick }){
//   return <div>
//     <button onClick={ (e) => {handleClick('A'); } }>A</button>
//     <button onClick={ (e) => {handleClick('B'); } }>B</button>
//     <button onClick={ (e) => {handleClick('C'); } }>C</button>
//   </div>;
// };

// ReactDOM.render(<Clicker handleClick={ (letter) => {console.log(`${letter} is clicked`); } }/>,
//   document.getElementById('root'));


// function ClickyButton({numberOfButtons, onSelection}){
//   const makeButton = v => <button key={v} id={v} onClick={event => onSelection(event.target.id)}>{v}</button>
//   return <div>
//     {_.range(1, numberOfButtons + 1).map(makeButton)}
//   </div>;
// };

// ReactDOM.render(<ClickyButton numberOfButtons={99} onSelection={console.log}/>,
//   document.getElementById('root'));
// registerServiceWorker();
