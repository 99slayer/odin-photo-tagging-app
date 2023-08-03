import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmoRXHa8A2lNwVLiDkIdO7oiCuFmpGujY",
  authDomain: "odin-photo-tagging-app-99.firebaseapp.com",
  projectId: "odin-photo-tagging-app-99",
  storageBucket: "odin-photo-tagging-app-99.appspot.com",
  messagingSenderId: "1060505103507",
  appId: "1:1060505103507:web:5e5534f4ad9070e8da7166",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getTarget(target) {
  const docRef = doc(db, `Targets/${target}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

export const getHighScores = async () => {
  const querySnapshot = await getDocs(collection(db, "HighScores"));
  const highScores = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    highScores.push({
      name: data.name,
      time: data.time,
    });
  });

  return highScores;
};

export const addHighScore = async (name, time) => {
  if (name && time) {
    const numberOfScores = await getHighScores().then((value) => {
      return Object.keys(value).length;
    });

    await setDoc(doc(db, "HighScores", `${numberOfScores + 1}`), {
      name,
      time,
    });
  } else {
    console.error("Invalid parameter.");
    return;
  }
};
