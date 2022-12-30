import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import {Route, Routes} from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Home } from './Pages/Home';
import { Users } from './Pages/Users';
import { Errors } from './Pages/Errors';
import {Navbar} from "./Components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Container>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Errors" element={<Errors />} />
      </Routes>
      </Container>
    </>
)
}

export default App;
