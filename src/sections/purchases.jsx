import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function Purchases() {
  const { user } = useAuth();
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    if (!user) return;

    async function fetchPurchases() {
      try {
        const purchasesRef = collection(db, "users", user.uid, "purchases");
        const snapshot = await getDocs(purchasesRef);

        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPurchases(items);
      } catch (err) {
        console.error("Error fetching purchases:", err);
      }
    }

    fetchPurchases();
  }, [user]);


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Purchases</h1>

      {purchases.length === 0 ? (
        <p className="text-gray-600 text-lg">You haven't purchased any course yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {purchases.map(course => (
            <div key={course.id} className="shadow-lg rounded-lg p-4 border">
              <img
                src={course.coverImage}
                alt={course.title}
                className="w-full h-40 object-cover rounded"
              />

              <h2 className="text-xl font-semibold mt-3">{course.title}</h2>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                View Course
              </button>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}
