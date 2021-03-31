// yarn add redux react-redux

import React, {Component} from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

// actionの作成
// action = appの中で何が起きたかを示す


// Propsは親のコンポーネントから値を渡されたのに対して
// stateはコンポーネントの内部でのみ利用される
// propsは変更不可能,stateは変更可能

// class書いて、method書いて,最後にrender書いて返す
class App extends Component {
  // constractorはreduxで処理するから削除
  // constructor(props) {
  //   super(props)
  //   console.log(this.state)
  //   this.state = {count : 0}
  // }

  render(){
    const props = this.props
    return(
    <React.Fragment>
      <div>value: {props.value}</div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({ 
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)



//export default App;
