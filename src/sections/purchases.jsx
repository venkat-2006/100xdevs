import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";  

console.log("🔥 Purchases component LOADED");

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();   

  useEffect(() => {
    async function fetchPurchases() {
      try {
        const user = auth.currentUser;

        if (!user) {
          console.log("❌ No user logged in");
          setLoading(false);
          return;
        }

        console.log("✅ Fetching purchases for user:", user.uid);

        const purchasesRef = collection(db, "users", user.uid, "purchases");
        const snapshot = await getDocs(purchasesRef);

        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("🔥 PURCHASES FETCHED:", items);
        setPurchases(items);
      } catch (err) {
        console.error("❌ Error fetching purchases:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPurchases();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Your Purchases</h1>
        <p className="text-gray-600">Loading your purchases...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Purchases</h1>

      {purchases.length === 0 ? (
        <p className="text-gray-600 text-lg">You haven't purchased any course yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {purchases.map(course => (
            <div 
              key={course.id} 
              className="shadow-lg rounded-lg p-4 border flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-60 object-cover rounded-2xl"
              />

              <h2 className="text-xl font-semibold mt-3">{course.title}</h2>

              <p className="text-sm text-gray-500 mt-2">
                Purchased: {new Date(course.purchasedAt).toLocaleDateString()}
              </p>

              <button
                className="mt-auto mb-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-[210px]"
                onClick={() => navigate(`/courses/${course.id}`)}  
              >
                View Course
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
