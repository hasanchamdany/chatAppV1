import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import * as Expo from 'expo'
import Constants from 'expo-constants';
import 'dotenv/config';
// Firebase config
const firebaseConfig = {
  // apiKey: Constants.manifest.extra.apiKey,
  // authDomain: Constants.manifest.extra.authDomain,
  // projectId: Constants.manifest.extra.projectId,
  // storageBucket: Constants.manifest.extra.storageBucket,
  // messagingSenderId: Constants.manifest.extra.messagingSenderId,
  // appId: Constants.manifest.extra.appId,
  // databaseURL: Constants.manifest.extra.databaseURL

  // apiKey: "AIzaSyBQDRYd3KU0yPN5-BnlVG9HD8xqjAyajUk",
  // authDomain: "chatappv1-8a7c1.firebaseapp.com",
  // projectId: "chatappv1-8a7c1",
  // storageBucket: "chatappv1-8a7c1.appspot.com",
  // messagingSenderId: "263246682787",
  // appId: "1:263246682787:web:b955f763863ac20b2afd16",
  // measurementId: "G-ZCX05F3R52"

  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.measurementId,
  projectId: process.env.PROJECT_ID,
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();