import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpspdnMSd2daORt2SEHLvX7TxuvaROOIc",
  authDomain: "maaviz-portfolio.firebaseapp.com",
  projectId: "maaviz-portfolio",
  storageBucket: "maaviz-portfolio.appspot.com",
  messagingSenderId: "96344259153",
  appId: "1:96344259153:web:5addc0ae30bf0cd80dd670"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
