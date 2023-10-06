import "./App.css";

import React, { useState } from "react";
import NavBar2 from "./components/NavBar2";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App=()=>{
  const pageSize=21;
  const apikey=process.env.REACT_APP_NEWS_API;
  
  const[progress,setProgress]=useState(0);
  const setprogress=(progress)=>{
    setProgress(progress);
  }
    return (
      <div>
        <Router>
        <NavBar2/>
        <LoadingBar
        height={3}
        color='#0095a2'
        progress={progress}
        />
        <Routes>
          <Route path="/" element={<News apikey={apikey} setprogress={setprogress} pgsize={pageSize} category={"general"} />} />
          <Route path="/business" element={<News apikey={apikey} setprogress={setprogress} pgsize={pageSize} category={"business"} />} />
          <Route path="/entertainment" element={<News apikey={apikey} setprogress={setprogress} pgsize={pageSize} category={"entertainment"} />} />
          <Route path="/health" element={<News apikey={apikey} setprogress={setprogress} pgsize={pageSize} category={"health"} />} />
          <Route path="/science" element={<News apikey={apikey} setprogress={setprogress} pgsize={pageSize} category={"science"} />} />
          <Route path="/sports" element={<News apikey={apikey} setprogress={setprogress} pgsize={pageSize} category={"sports"} />} /> 
          <Route path="/technology" element={<News apikey={apikey} setprogress={setprogress} pgsize={pageSize} category={"technology"} />} /> 
        </Routes>
        </Router>
      </div>
    );
}
export default App