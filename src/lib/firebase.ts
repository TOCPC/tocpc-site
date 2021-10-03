import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBEL8EqKW4HJDNh7W4M2j1gnc5dahZplY0',
  authDomain: 'tocpc-prod-2021.firebaseapp.com',
  projectId: 'tocpc-prod-2021',
  storageBucket: 'tocpc-prod-2021.appspot.com',
  messagingSenderId: '857753403795',
  appId: '1:857753403795:web:7c6607e69f446575972866',
  measurementId: 'G-47CV8JS6DE',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
