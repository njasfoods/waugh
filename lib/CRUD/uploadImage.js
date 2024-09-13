import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

// Function to upload image
export async function uploadImage(image) {
    console.log("image sent ofver", image)
    const imageRef = ref(storage, `images/${image.name}`);
  
    try {
      const snapshot = await uploadBytes(imageRef, image);
      console.log("Uploaded a blob or file!");
  
      const imageUrl = await getDownloadURL(snapshot.ref);
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  }