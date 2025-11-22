import React from "react";

export default function ConfirmPurchase({ open, onClose, onConfirm, courseTitle }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-2xl shadow-xl w-[320px]">
        
        <h2 className="text-lg font-semibold text-center">
          Confirm Purchase
        </h2>

        <p className="text-gray-700 mt-3 text-center">
          Are you sure you want to buy <br />
          <span className="font-semibold">{courseTitle}</span>?
        </p>

        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            onClick={onConfirm}
          >
            Yes, Buy
          </button>
        </div>

      </div>

    </div>
  );
}
