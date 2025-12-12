// utils/purchases.js

import { db } from "../firebase";
import { auth } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export async function buyCourse(courseId, courseData) {
  const user = auth.currentUser;

  if (!user) {
    alert("Please login first");
    return;
  }

  const uid = user.uid;

  // WRITE TO THE CORRECT PATH
  const purchaseRef = doc(db, "users", uid, "purchases", courseId);

  await setDoc(purchaseRef, {
    ...courseData,
    purchasedAt: serverTimestamp(),
  });

  alert("Course purchased successfully!");
}
