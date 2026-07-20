// ---------------------------------------------------------------------------
// SGPS shared storage — backed by Firebase Firestore so every person who opens
// this website (on any device) reads and writes the SAME live data.
//
// SETUP (one-time, ~5 minutes):
// 1. Go to https://console.firebase.google.com → "Add project" → give it any
//    name (e.g. "sgps-tirupur") → you can turn off Google Analytics, not needed.
// 2. Inside the project: click the "</>" (Web) icon → register an app
//    (any nickname) → Firebase will show you a `firebaseConfig` object.
//    Copy those values into the object below.
// 3. In the left sidebar: Build → Firestore Database → "Create database" →
//    choose "Start in test mode" → pick any region close to India → Enable.
//    (Test mode allows read/write for ~30 days; see the note at the bottom of
//    this file for how to lock it down afterwards.)
// ---------------------------------------------------------------------------

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_82IuTGBjB0oAEXOZKY1bH_0hP_JwB6k",
  authDomain: "sgps-tirupur.firebaseapp.com",
  projectId: "sgps-tirupur",
  storageBucket: "sgps-tirupur.firebasestorage.app",
  messagingSenderId: "260394106228",
  appId: "1:260394106228:web:73ea8d4f4bfe5316440021",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Same shape as Claude's window.storage.get/set, so the rest of the app
// doesn't need to change: { key, value } on success, throws if missing.
export const storage = {
  async get(key) {
    const snap = await getDoc(doc(db, "sgps_kv", key));
    if (!snap.exists()) throw new Error("not found");
    return { key, value: snap.data().value };
  },
  async set(key, value) {
    await setDoc(doc(db, "sgps_kv", key), { value });
    return { key, value };
  },
};

// ---------------------------------------------------------------------------
// SECURITY NOTE: "Test mode" Firestore rules allow anyone with your config
// (i.e. anyone who can view your website's source) to read/write your data
// directly, not just through the app's own login screen. That's fine for an
// internal trial. Before relying on this for real production data, go to
// Firestore → Rules and tighten them, for example:
//
//   rules_version = '2';
//   service cloud.firestore {
//     match /databases/{database}/documents {
//       match /sgps_kv/{key} {
//         allow read, write: if true; // replace with real auth checks later
//       }
//     }
//   }
// ---------------------------------------------------------------------------
