import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { sendEmail } from "../sendEmail";

export async function createUser(email,password){
    try{
        await createUserWithEmailAndPassword(auth,email, password);
        console.log('User created successfully!');
        await sendEmail(email, password)
        
    } catch (error) {
        console.error("Error creating user:", error.message);
        // alert(error.message);
    }
}