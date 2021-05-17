import './App.css';
import React from 'react'

const Button = (props) =>{
  const {text,handlerClick} = props
  return <button onClick={handlerClick}>{text}</button>
}
const MessageWrapper = props=>{
  return props.messages.map(messageItem =><div>{messageItem}</div>)
}
function App(){
  let [messages, setMessages] = React.useState(["Hello!"])
  const onButtonClick = () => {
      console.log('clicked!', { messages })
      setMessages([...messages, 'Hello again!'])
  }
  
return (
  <div className="App"> 
<MessageWrapper messages={messages} />
        <button onClick={onButtonClick}>My button</button>
  </div>
 )
}


export default App;
