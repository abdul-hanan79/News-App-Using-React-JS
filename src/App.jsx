// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import News from './Components/News';
import {
  BrowserRouter as Router,

  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App= ()=> {
const  apiKey="ed65fb6d855740b7b5efbb3d9943ea5b"
// apiKey =process.env.NEWSAPI
const [progress,SetProgress]=useState(0)
 
  const setProgress = (progress) => {
    SetProgress(progress+progress)
    
  }
 

    
    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            height={3}
            background={4}
            progress={progress}

          />
          <Navbar />

          <Routes>

            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" color="primary" pageSize={5} country='us' category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" color="success" pageSize={5} country='us' category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" color="secondary" pageSize={5} country='us' category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" color="danger" pageSize={5} country='us' category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" color="dark" pageSize={5} country='us' category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" color="warning" pageSize={5} country='us' category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" color="success" pageSize={5} country='us' category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" color="primary" pageSize={5} country='us' category="technology" />} />
          </Routes>

        </Router>

      </>
    )
 
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn with Developer Abdul Hanan
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
