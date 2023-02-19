import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";


import { Routes,Route } from "react-router-dom"
import Edit from "./components/Edit";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </>
  );
}

export default App;
