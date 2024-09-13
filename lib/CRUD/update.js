import {   doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

// Function to create collection
export async function updateCollection(data) {
  const collectionRef = doc(db, data.collection, data.id);

  try {
    await updateDoc(collectionRef, {
      ...data,
    });

    console.log("Collection created successfully!");
    // You can add redirection logic here if needed
  } catch (error) {
    console.error("Error creating collection:", error.message);
    alert(error.message);
  }
}