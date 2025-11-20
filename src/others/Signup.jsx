import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup({ onClose }) {
    const [step, setStep] = useState(1);

    // Step 1 input
    const [firstInput, setFirstInput] = useState("");

    // Step 2 full form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
    const [state, setState] = useState("");

    const handleNext = () => {
        if (!firstInput.trim()) return alert("Please enter email or phone");

        if (firstInput.includes("@")) {
            setEmail(firstInput);
        } else {
            setPhone(firstInput);
        }

        setStep(2);
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Signup with:", {
                fullName,
                email,
                phone,
                password,
                state,
            });

            alert("Signup successful!");
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

            {/* Modal */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl z-[101] w-[500px] p-8  ">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                >
                    ✕
                </button>

                {/* ------------------- STEP 1 ------------------- */}
                {step === 1 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Enter email/phone number
                        </h2>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone number / Email
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your phone number or email"
                            value={firstInput}
                            onChange={(e) => setFirstInput(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-1 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <p className="text-xs text-gray-500 mb-5">
                            Please add country code if you are a user outside of India
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={handleNext}
                                className="w-[100px] bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
                            >
                                Next
                            </button>
                        </div>


                        <p className="text-center text-xs text-gray-600 mt-3">
                            By signing up, you agree to our{" "}
                            <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">Terms & Conditions</span>{" "}
                            and{" "}
                            <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">Privacy Policy</span>.
                        </p>
                    </>
                )}

                {/* ------------------- STEP 2 ------------------- */}
                {step === 2 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Create your account
                        </h2>

                        <form onSubmit={handleSignup} className="space-y-4">

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Email *</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg"
                                />

                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                />
                                <p className="text-xs">Please add country code if you are a user outside of India</p>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium mb-1">Password *</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                />
                            </div>

                            {/* State */}
                            <div>
                                <label className="block text-sm font-medium mb-1">State *</label>

                                <select
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 mb-[35px] border border-gray-300 rounded-lg bg-white"
                                >
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>

                                </select>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    onClick={handleNext}
                                    className="w-[100px] bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <p className="text-center text-xs text-gray-600 mt-3">
                                By signing up, you agree to our{" "}
                                <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">Terms & Conditions</span>{" "}
                                and{" "}
                                <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">Privacy Policy</span>.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </>
    );
}
