import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

function Login({ onClose }) {

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuth();

  const handleLogin = async () => {
    try {
      let loginEmail = userId;

      // detect phone input
      const isPhone = /^[0-9]{8,15}$/.test(userId);

      if (isPhone) {
        const q = query(collection(db, "users"), where("phone", "==", userId));
        const snap = await getDocs(q);

        if (snap.empty) {
          alert("Phone number not registered!");
          return;
        }

        loginEmail = snap.docs[0].data().email;
      }

      await signInWithEmailAndPassword(auth, loginEmail, password);

      alert("Login successful!");
      setIsLoggedIn(true);
      onClose();

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl z-[101] w-[450px] p-6">

        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        <div className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium mb-1">Email / Phone</label>
            <input
              type="text"
              placeholder="Enter email or phone"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleLogin}
              className="w-[120px] bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>

        </div>

      </div>
    </>
  );
}

export default Login;
