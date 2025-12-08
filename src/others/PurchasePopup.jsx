import { useState } from "react";

export default function PurchasePopup({ onClose, onConfirm }) {
    
    const [code, setCode] = useState("");

    return (
        <>
            {/* Background Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-[200]"
                onClick={onClose}
            />

            {/* Popup Card */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            bg-white rounded-2xl p-6 shadow-lg z-[201] w-[400px]">

                <h2 className="text-xl font-bold text-center mb-4">Enter Purchase Code</h2>

                <input
                    type="text"
                    placeholder="Enter your code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mb-4"
                />

                <button
                    onClick={() => onConfirm(code)}
                    className="w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700"
                >
                    Confirm Purchase
                </button>
            </div>
        </>
    );
}
