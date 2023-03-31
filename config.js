import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCPcMCmxCfW_IRbKJAkJSmkjyseLBsqFNU",
  authDomain: "stage4-c9db2.firebaseapp.com",
  projectId: "stage4-c9db2",
  storageBucket: "stage4-c9db2.appspot.com",
  messagingSenderId: "137683670606",
  appId: "1:137683670606:web:3594e7736b4a64e18c951f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
