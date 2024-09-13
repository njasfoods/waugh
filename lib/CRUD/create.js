import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

// Function to create collection
export async function createCollection(data) {
  const categoryRef = collection(db, data.collection);

  try {
    await addDoc(categoryRef, {
      ...data,
    });

    console.log("Collection created successfully!");
    // You can add redirection logic here if needed
  } catch (error) {
    console.error("Error creating collection:", error.message);
    alert(error.message);
  }
}