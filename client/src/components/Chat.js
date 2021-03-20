import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import querystring from 'query-string'

//let socket; 
 function Chat({location}){

    const [name, setName]=useState('');
    const [room, setRoom]=useState(''); 
    const endpoint = 'http://localhost:4000';
    const connectionOptions =  {
        "force new connection" : true,
        "reconnectionAttempts": "Infinity", 
        "timeout" : 10000,                  
        "transports" : ["websocket"]
    };
    useEffect( ()=>{
        const {name,room}= querystring.parse(location.search)
        setName(name);
        setRoom(room);
        
        const socket = io.connect(endpoint,connectionOptions);

       // console.log(socket);
        //console.log(location.search)
        //console.log(name)
        socket.emit("new-user",{name ,room},()=>{
            console.log(name);
        });

        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[endpoint,location.search]) ;

    
    return(
        <div>
            <h1>Lets Start</h1>  
        </div>
    )
}
export default Chat ;