'use client'
import React, { useContext, useState, useEffect, createContext } from "react";

import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/libs/firebase";

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	function signup(email, password,firstName, lastName,isPartner) {
		let displayName = firstName+" "+ lastName
		createUserWithEmailAndPassword(auth, email, password).then(() => {
			updateProfile(auth.currentUser, {
				displayName
			}).then(()=>{
                createUserDoc();
            });
			const createUserDoc = async () => {
				await setDoc(doc(db, "Users", auth.currentUser.uid), {
					firstName, lastName,
                   email,
					isAdmin: false,
					isStaff: false,
                    isVendor: isPartner,
				});
			};
			
		});

		return;
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		return signOut(auth);
	}

	async function update(para){
		await updateDoc(doc(db,"Users",currentUser.uid), {
			
		  });
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		login,
		signup,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}