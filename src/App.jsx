import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import JoinNow from "./pages/JoinNow";
import Home2 from "./pages/Home2";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // FIXED PATH

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
      <Route path="/all-courses" element={<JoinNow />} />
      <Route path="/home" element={<Home2 />} />
    </Routes>
  );
}

function UserStatus() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
  }, []);

  return <div>{user ? `Logged in: ${user.email}` : "Not logged in"}</div>;
}

export default App;
export { UserStatus };
