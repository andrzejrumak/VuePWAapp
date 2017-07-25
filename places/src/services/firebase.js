
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyC_8bMCrov2ddSGIus2iLSeEhEBOFYkcvA',
  authDomain: 'awesome-places-70189.firebaseapp.com',
  databaseURL: 'https://awesome-places-70189.firebaseio.com',
  projectId: 'awesome-places-70189',
  storageBucket: 'awesome-places-70189.appspot.com',
  messagingSenderId: '897189590353'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
