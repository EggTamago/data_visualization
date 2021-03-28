import React from 'react';

// function App() {

//   const greeting = "Hello world!";
//   const dom = <input type="text" onClick={() => {console.log("I am clicked")}} />;

//     return (
//         dom
//     );
// }

const App = () => {
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}


export default App;
