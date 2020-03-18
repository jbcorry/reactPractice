import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUru94TObOiDl4v_L_uURdr-kPeZU6fhE",
    authDomain: "mario-plan-net-ninja-tutorial.firebaseapp.com",
    databaseURL: "https://mario-plan-net-ninja-tutorial.firebaseio.com",
    projectId: "mario-plan-net-ninja-tutorial",
    storageBucket: "mario-plan-net-ninja-tutorial.appspot.com",
    messagingSenderId: "38943113230",
    appId: "1:38943113230:web:e830bff6aece0c6d18bc5f",
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;