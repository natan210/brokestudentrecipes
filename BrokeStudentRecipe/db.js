//register & login

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  updateDoc,
  setDoc,
  getDocs,
  getDoc,
  addDoc,
  collection,
  arrayUnion,
  query,
  where,
} from "firebase/firestore";

import { auth, db, storage } from "./firebase.js";

const user = auth.currentUser;
const uid = user === null ? null : user.id;

//account validation only handling 2 types of errors
async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err.code === "auth/user-not-found") {
      return "notFound"
    } else {
      return "unknown"
    }
  }
}

async function register(email, password, user) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw error;
      // ..
    });
  await createUser(user);
}

//POST to firestore
async function createUser(user) {
  //TODO: add more attributes later
  const { name, email } = user;
  console.log(name, email, "asdasd");
  // const uid = auth.currentUser.id;
  const userRef = doc(db, "users", email);
  await setDoc(userRef, {
    name: name,
  });
}
//GET from firestore
async function getUser() {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();
  return userData;
}

export { register, login, createUser, getUser };
