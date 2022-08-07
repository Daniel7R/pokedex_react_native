// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { Constants } from "expo-constants";
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.StorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};

