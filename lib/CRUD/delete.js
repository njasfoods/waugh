import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export async function deleteCollection(id, collectionString){
    await deleteDoc(doc(db, collectionString, id));
}