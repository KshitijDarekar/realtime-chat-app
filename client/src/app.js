import React from 'react'
import { BrowserRouter , Switch , Route } from 'react-router-dom' ;
import Join from './components/Join'
import Chat from './components/Chat'
import Footer from './components/footer.js';

function App() {
  
    return (
      <>
      <BrowserRouter>
        <div className="App">
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </div>
      </BrowserRouter>
      <Footer/>
      </>
    );
  }
  export default App;