import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBf-qpqK2vHsyGcQ8kEh2j6f8M6fRAxwWU",
    authDomain: "phonebook-45c68.firebaseapp.com",
    databaseURL: "https://phonebook-45c68.firebaseio.com",
    storageBucket: "phonebook-45c68.appspot.com",
    messagingSenderId: "535079705418"
};

export default firebase.initializeApp(config);
