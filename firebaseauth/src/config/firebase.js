import firebase from 'firebase'

const Config = {
    apiKey: "AIzaSyAreuN0iTgvMf176tpnJaddlHOM39UvPw0",
    authDomain: "fir-auth-demo-d24d3.firebaseapp.com",
    databaseURL: "https://fir-auth-demo-d24d3.firebaseio.com",
    projectId: "fir-auth-demo-d24d3",
    storageBucket: "fir-auth-demo-d24d3.appspot.com",
    messagingSenderId: "150646071734",
    appId: "1:150646071734:web:e70aa893d738cfd3162117"
};
// Initialize Firebase
const fire = firebase.initializeApp(Config);
export default fire;