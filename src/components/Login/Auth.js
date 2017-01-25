import * as firebase from 'firebase';

const Auth = {
    login() {
        let provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    },

    getToken() {
        return localStorage.token;
    },

    logout() {
        delete localStorage.clear();
    },

    loggedIn() {
        return !!localStorage.token;
    },

    onChange() {}
}

export default Auth;
