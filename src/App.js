import React,{useState,useEffect} from 'react';
import { FormControl,Input } from '@material-ui/core';
import Message from './components/Message'
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import './App.css';


function App() {

  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');

  useEffect(()=>{
    setUsername(prompt('Please enter your name:'))
  }, [])

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})))
    })
  },[])

  const sendMessage=(event)=>{
    event.preventDefault();

    db.collection('messages').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('')
  }

  return (
    <div className="App">
      
      <img 
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" 
        alt="Messenger Logo"
      />
      <h1>Facebook Messenger Clone</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input 
            className="app__input"
            placeholder="Enter a message..." 
            value={input} 
            onChange={event=>setInput(event.target.value)}
          />
          <IconButton 
            className="app__iconButton"
            disabled={!input} 
            variant="contained" 
            color="primary" 
            type="submit" 
            onClick={sendMessage}
          >
            <SendIcon fontSize="large" />
          </IconButton>

        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id,message}) => 
            <Message  key={id} username={username} message={message}/>
          )
        }
      </FlipMove>

    </div>
  );
}

export default App;
