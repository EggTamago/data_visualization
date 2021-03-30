import React from 'react';
import Proptypes from 'prop-types';

// function App() {

//   const greeting = "Hello world!";
//   const dom = <input type="text" onClick={() => {console.log("I am clicked")}} />;

//     return (
//         dom
//     );
// }


// index.js:1 Warning: Each child in a list should have a unique "key" prop.
// このwarningみたらkey={index}を足してあげる
const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 0}
  ]
  return (
  <div>
    {
    profiles.map((profiles, index) => {
      return <User name={profiles.name} age={profiles.age} key={index}/>
    })
  }
  </div>
  )
}


// User componentに対してname, ageという属性(props)が与えられる
const User = (props) => {
  return <div>Hi, I am {props.name} and Im {props.age} years old!</div>
}

// ここを使ってPropに対する型を定義する
// isRequiredをつけた場合、ageがなければエラーになる
User.Proptypes = {
  name: Proptypes.string,
  age: Proptypes.number.isRequired
}


export default App;
