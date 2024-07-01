import React from 'react'
import socketIO from "socket.io-client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';


// const ENDPOINT = "http://localhost:3000/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/chat' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App