import './App.css';
import React from 'react'
import Child from './Child.js'
export default class App extends React.Component {
  state = {
  text: 'Наш первый React-компонент',
  counter:0,

};


  componentDidUpdate() {
    console.log('componentDidUpdate');
    }
  componentWillMount() {
    console.log('componentWillMount');
    }
    componentDidMount() {
    console.log('componentDidMount');

    setTimeout(() => this.setState({'text': 'Обновленный React-компонент'}),
    1000);
    }
    handleClick =()=>{
this.setState({"counter":this.state.counter+1})
    }

    render() {
    console.log('render');
    return (
<div>
<h1>{this.state.text}</h1>
        <Child counter={this.state.counter}/>
        <button onClick={this.handleClick}>+1</button>
</div>

    
    )
    }

}

