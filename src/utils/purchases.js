import { db } from "../firebase";
import { auth } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export const buyCourse = async (courseId) => {
  const user = auth.currentUser;

  if (!user) {
    alert("Please login to buy the course");
    return;
  }

  const userRef = doc(db, "users", user.uid);

  try {
    await updateDoc(userRef, {
      purchases: arrayUnion(courseId)
    });

    alert("Course purchased successfully!");
  } catch (error) {
    console.error("Error buying course:", error);
  }
};
