import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyBAS9H6QjwgDJF_DRAQWmWZx3ngbZyaHnE",
  authDomain: "app-ema-8dd6a.firebaseapp.com",
  databaseURL: "https://app-ema-8dd6a-default-rtdb.firebaseio.com",
  projectId: "app-ema-8dd6a",
  storageBucket: "app-ema-8dd6a.appspot.com",
  messagingSenderId: "448239956919",
  appId: "1:448239956919:web:ef425f78cf2f2212576e32"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }