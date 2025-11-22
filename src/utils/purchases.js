// utils/purchases.js

import { db } from "../firebase";
import { auth } from "../firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

export async function buyCourse(courseId) {
  const user = auth.currentUser;

  if (!user) {
    alert("Please login first");
    return;
  }

  const uid = user.uid;

  const userRef = doc(db, "purchases", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    // Add course to existing array
    await updateDoc(userRef, {
      courses: arrayUnion(courseId),
    });
  } else {
    // Create new document
    await setDoc(userRef, {
      courses: [courseId],
    });
  }

  alert("Course purchased successfully!");
}
