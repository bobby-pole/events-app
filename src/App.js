import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddEvent from "./components/AddEvent.jsx";
import EditEvent from "./components/EditEvent.jsx";
import EventPreview from "./components/EventPreview.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/edit/:id" element={<EditEvent />} />
        <Route path="/show/:id" element={<EventPreview />} />
      </Routes>
    </div>
  );
};

export default App;
