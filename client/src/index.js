import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { 
  BrowserRouter ,
  Routes,
  Route
  } from "react-router-dom"


import NotFound from './routes/notFound'
import Login from './routes';


ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/> }/>
        <Route path="*" element={< NotFound />}/>      
        
      </Routes>
    </BrowserRouter>
  ,document.getElementById('root')
);

