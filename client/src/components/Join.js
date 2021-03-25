import React,{useState} from 'react';
import  {Link} from 'react-router-dom'

 function Join(){
    const [name, setName]=useState('');
    const [room, setRoom]=useState(''); 
    return(
        <div className="join-container">   
            <h1>Join Room</h1>
            <div>
                <input placeholder="name" className="join-input" type="text"  
                onChange={ (data) => setName(data.target.value) }
                ></input>
            </div>
            <div>
                <input placeholder="room" className="room-input" type="text"  
                onChange={ (data) => setRoom(data.target.value) }
                ></input>
            </div>
            <Link onClick={evt =>( !name||!room) ? evt.preventDefault():null} to={`/chat/?name=${name}&room=${room}`}>
                <button className="btn" type="submit">Sign In</button>
            </Link>
        </div>
    )
}
export default Join ;