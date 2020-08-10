import React from 'react';
import ReactDOM, { render } from 'react-dom';

function Greeting() {
  
// Try all of these variations:
var username = "root";
//var username = undefined;
//var username = null;
//var username = false;

   return (
    <div>
     {username && 'Hello, ' + username}
     {!username && 'Not logged in'}
    </div>
   )
  }
 

ReactDOM.render(
  <Greeting/>,
  document.getElementById('root')
);