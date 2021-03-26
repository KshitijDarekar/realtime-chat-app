import React,{useState} from 'react';
import  {Link} from 'react-router-dom';
import './join.css'


 function Join(){
    const [name, setName]=useState('');
    const [room, setRoom]=useState(''); 
    return(
        <div className="join-container">   
            <h1 s>Join Room and Chat</h1>
            <div>
                <input placeholder="Your Name" className="join-input" type="text"  
                onChange={ (data) => setName(data.target.value) }
                ></input>
            </div>
            <div>
                <input placeholder="Room name" className="room-input mt-20" type="text"  
                onChange={ (data) => setRoom(data.target.value) }
                ></input>
            </div>
            <Link onClick={evt =>( !name||!room) ? evt.preventDefault():null} to={`/chat/?name=${name}&room=${room}`}>
                <button className="btn mt-20" type="submit">Sign In</button>
            </Link>
        </div>
    )
}
export default Join ;