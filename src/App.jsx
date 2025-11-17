import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import JoinNow from "./pages/JoinNow";
import Home2 from "./pages/Home2";

function App() {
  const [lightMode, setLightMode] = useState(false);

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
      <Route 
        path="/all-courses" 
        element={<JoinNow  />} 
      />
      <Route 
        path="/home" 
        element={<Home2  />} 
      />
    </Routes>
  );
}

export default App;
