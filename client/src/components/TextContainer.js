import React from 'react';
import './textContainer.css'
const TextContainer = ({ users }) => (
  <div className="text-container">
    
    {
      users
        ? (
          <div>
            <h1>Users Online:</h1>
            <div className="active-container">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="active-item">
                    🟢{name}
                    {/* <img alt="Online Icon" src={onlineIcon}/> */}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;