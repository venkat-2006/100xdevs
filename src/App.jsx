import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import JoinNow from "./pages/JoinNow";
import Home2 from "./pages/Home2";
import Purchases from "./sections/purchases"; 



import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import CoursePage from "./pages/CoursePage";

function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    window.auth = auth;     // ⭐ This exposes auth to browser console  //'0G5E3TCUVUhN4VfcN1q7ERlvRKr1'
    console.log("Auth exposed:", window.auth);
  }, []);

  useEffect(() => {
    if (lightMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [lightMode]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home lightMode={lightMode} setLightMode={setLightMode} />}
      />
      <Route 
        path="/login" 
        element={<Login lightMode={lightMode} setLightMode={setLightMode} />} 
      />
      <Route path="/all-courses" element={<JoinNow />} />
      <Route path="/home" element={<Home2 />} />

      <Route path="/courses/:id" element={<CoursePage />} />

      <Route path="/purchases" element={<Purchases />} />


      
      
    </Routes>
  );
}

export default App;
