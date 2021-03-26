import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import querystring from 'query-string';
import TextContainer from './TextContainer.js';
import Messages from './Messages.js';
import InfoBar from './Infobar.js';
import Input from './Input.js';

import './chat.css';

let socket; 
const connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};
 function Chat({location}){

    const [name, setName]=useState('');
    const [room, setRoom]=useState('');
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState('');

    const endpoint = 'http://localhost:4050';
    
    useEffect( ()=>{
       
        const {name,room}= querystring.parse(location.search)
        setName(name);
        setRoom(room);
        
        socket = io.connect(endpoint,connectionOptions);

        socket.emit("join",{name ,room},()=>{
            console.log(name);
        });

        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[endpoint,location.search]) ;

    useEffect(()=>{ 
        // chat-messages     
    socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
      
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
  }, []

    )

    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
      }
    console.log(message,messages)
    
    return(
       

    <div className="outer-container">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
        
    );
}
export default Chat ;