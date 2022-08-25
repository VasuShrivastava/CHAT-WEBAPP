import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from "react-flip-move";


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username:'VALAK',message:'Welcome'}]);
  const [username, setUsername] = useState('');
  
  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id, message: doc.data()})))});
  },[])
  useEffect(()=>{
      setUsername(prompt('Please Enter your Name'));
  },[])

  const sendMessage = (event) => {
      event.stopPropagation();
       db.collection('messages').add({
         message:input,
         username: username,
         timestamp:firebase.firestore.FieldValue.serverTimestamp()
       })
       setInput('');
  }

  return (
    
    <div className="App">
     <h1>Hello {username}!!🤙</h1>
    <form className="app_form">
        <FormControl className="app_formcontrol">
          <Input className="app_input" placeholder="Enter a Message..." value={input} onChange={event=>setInput(event.target.value)} />
          <button className="myButton" disabled={!input} variant="contained" color="primary" onClick = {sendMessage} >Send</button>
        </FormControl>
    </form>
     <FlipMove>
          {
           messages.map(({id, message}) =>(
          <Message key={id} username={username} message = {message} />
            ))
          }
     </FlipMove>
      
    </div>
  );
}

export default App;
