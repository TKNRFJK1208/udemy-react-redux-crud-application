import React, { Component } from 'react';

function App() {
  return (
    <>
      <labe htmlFor="bar">bar</labe>
      <input type="text" onChange={()=>{console.log("I am clicked!")}} />
    </>
  );
}

export default App;
 