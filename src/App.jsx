import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [lightMode]);

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home lightMode={lightMode} setLightMode={setLightMode} />} 
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
