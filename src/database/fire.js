import firebase from 'firebase'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBAS9H6QjwgDJF_DRAQWmWZx3ngbZyaHnE",
  authDomain: "app-ema-8dd6a.firebaseapp.com",
  databaseURL: "https://app-ema-8dd6a-default-rtdb.firebaseio.com",
  projectId: "app-ema-8dd6a",
  storageBucket: "app-ema-8dd6a.appspot.com",
  messagingSenderId: "448239956919",
  appId: "1:448239956919:web:ef425f78cf2f2212576e32"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database().ref()