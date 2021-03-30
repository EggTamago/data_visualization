import React, {Component} from 'react';

// index.js:1 Warning: Each child in a list should have a unique "key" prop.
// このwarningみたらkey={index}を足してあげる
const App = () => {
  return (
    <Counter></Counter>
  )
}

// Propsは親のコンポーネントから値を渡されたのに対して
// stateはコンポーネントの内部でのみ利用される
// propsは変更不可能,stateは変更可能

// class書いて、method書いて,最後にrender書いて返す
class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count : 0}
  }

  // stateの変更にはsetStateがお決まりのように使う
  // setStateが呼び出されると自動でrenderされる
  handlePlusBottun = () => {
    console.log("handlePlusBottun")
    this.setState({count : this.state.count + 1})
  }

  handleMinusBottun = () => {
    console.log("handleMinusBottun")
    this.setState({count : this.state.count - 1})
  }

  render(){
    console.log("render")
    return(
    <React.Fragment>
      <div>count: {this.state.count}</div>
      <button onClick={this.handlePlusBottun}>+1</button>
      <button onClick={this.handleMinusBottun}>-1</button>
    </React.Fragment>
    )
  }
}




export default App;
