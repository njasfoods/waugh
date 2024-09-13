import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebase";


export const getCollection = async (collectionString) => {
    const collectRef = collection(db, collectionString);
    const collectionData = await getDocs(collectRef);
    const collectionList = collectionData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return collectionList;
};