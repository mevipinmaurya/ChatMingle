import React from 'react'
import socketIO from "socket.io-client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


// const ENDPOINT = "http://localhost:3000/";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App