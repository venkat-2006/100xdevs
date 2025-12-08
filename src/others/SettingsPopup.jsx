import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

export default function SettingsPopup({ onClose }) {

  // Profile States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("Andhra Pradesh");

  // Security states
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Load existing user profile
  useEffect(() => {
    async function fetchUser() {
      if (!auth.currentUser) return;

      const userRef = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const data = snap.data();
        setFullName(data.fullName || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setState(data.state || "Andhra Pradesh");
      }
    }

    fetchUser();
  }, []);

  // 🔹 Update Profile
  const updateProfile = async () => {
    try {
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        fullName,
        email,
        phone,
        state,
      });

      alert("Profile updated successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  // 🔹 Change Password Logic
  const changePassword = async () => {
    try {
      if (!currentPass || !newPass || !confirmPass) {
        return alert("Fill all password fields");
      }

      if (newPass !== confirmPass) {
        return alert("New password does not match!");
      }

      // re-authenticate user before password change
      const credential = EmailAuthProvider.credential(
        auth.currentUser.email,
        currentPass
      );

      await reauthenticateWithCredential(auth.currentUser, credential);

      await updatePassword(auth.currentUser, newPass);

      alert("Password changed successfully!");
      setCurrentPass("");
      setNewPass("");
      setConfirmPass("");

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      {/* Background Blur */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white rounded-2xl shadow-xl z-[101] w-[900px] p-10"
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Account Settings
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-2 gap-10">

          {/* -------- LEFT SIDE : GENERAL -------- */}
          <div>
            <h3 className="font-semibold text-lg mb-3">General</h3>

            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mb-4"
            />

            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mb-4"
            />

            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mb-4"
            />

            <label className="block text-sm font-medium mb-1">State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mb-6"
            >
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>

            </select>

            <button
              onClick={updateProfile}
              className="w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700"
            >
              Save Profile
            </button>
          </div>

          {/* -------- RIGHT SIDE : SECURITY -------- */}
          
          <form autoComplete="off">
          <div>
            <h3 className="font-semibold text-lg mb-3">Security</h3>

            <label className="block text-sm font-medium mb-1">Current Password</label>
            
            <input
              type="password"
              value={currentPass}
              onChange={(e) => setCurrentPass(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mb-4"
            />

            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mb-4"
            />

            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg mb-6"
            />

            <button
              onClick={changePassword}
              className="w-full bg-green-600 text-white py-2 rounded-full font-medium hover:bg-green-700"
            >
              Change Password
            </button>
          </div>
          </form>

        </div>
      </div>
    </>
  );
}
