import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import AllState from './AllState/AllState'
import Button from '@mui/material/Button';
import GlobalThemeOverride from './theme/GlobalThemeOverride';
import './App.css';

import Home from './Home/Home'
import Trivia from './Trivia/Trivia'
import Search from './Search/Search'

const App = () => {
  const [allStateItems, setAllStateItems] = useState([]);
  useEffect(() => {
    // Fetch data from the Express server
    axios.get('http://localhost:5000/allState')
      .then(response => {
        console.log({res: response.data})
        setAllStateItems(response.data.data)})
      .catch(error => console.error(error));
  }, []);

  
console.log({allStateItems})
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalThemeOverride>
        <Link to='/' ><Button>Home</Button></Link>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/AllState' element={<AllState items={allStateItems} />} />
          <Route path='/Search' element={<Search/>} />
          <Route path='/Trivia' element={<Trivia/>} />
        </Routes>
        </GlobalThemeOverride>
      </div>
    </BrowserRouter>
  );
}

export default App;
