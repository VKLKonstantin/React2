import React from 'react';
import Message from './Message';
import MessageAutor from './MessageAutor'

export default class MessageField extends React.Component{

    state = {
        messages: [
          {text: "Hello" },
          {text:"How are you?"},
          {text:"What is your name?"},
        ]
      }
    handleClick =()=>{
        this.setState({messages:[...this.state.messages]})
    }
    componentDidUpdate() {
        if(this.state.messages.length%2===1){
          setTimeout(() =>
        this.setState({ messages: [ ...this.state.messages, 'Не приставай ко мне, я робот!'
        ] }), 1000);
        }  
        }
        
    render(){
        const messageElements = this.state.messages.map((text,index)=>(
            <Message key={index} text={text}/>
            
        ));
        return  <div>
            {messageElements}
            <button onClick={this.handleClick}>отправить сообщение</button>
                </div> 
    }
}