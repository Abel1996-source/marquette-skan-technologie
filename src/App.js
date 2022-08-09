import {Routes, Route} from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import MenuPlat from './components/MenuPlat';
import NewSaleswoman from './components/NewSaleswoman';
import MainPlat from "./components/MainPlat";
import { useState } from 'react';

function App() {
  const [active, setActive]=useState("plat");
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/nouvelles-vendeuses' element={<NewSaleswoman/>}/>
      <Route path='/menu' element={<MenuPlat MainPlat={MainPlat} active={active} setActive={setActive} />}/>
    </Routes>
    </>
  );
}

export default App;
