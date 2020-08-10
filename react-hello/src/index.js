import React from 'react';
import ReactDOM from 'react-dom';

function Hello(){
  return <span>Hello</span>
}

function World(){
  return <span>World</span>
}

function HelloWorld(){
  return (
    <div>
      <Hello/> <World/>!
    </div>
    )
}

function ValidIndicator() {
  var isValid = true;
  return(
  <span>{isValid ? 'valid' : 'not valid'}</span>
  );
}

function ValidIndicator1(){
  var isValid = true;
  return(
    <span>
      {/* this is comment */}
      {isValid && 'valid'}
      {!isValid && 'not valid'}
      {
      //Comment
      //comments
      }
    </span>
  );
}

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
);