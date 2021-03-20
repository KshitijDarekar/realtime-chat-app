import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom' ;

function App() {
  
    return (
      <BrowserRouter>
        <div className="App">
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </div>
      </BrowserRouter>
      
    );
  }
  export default App;