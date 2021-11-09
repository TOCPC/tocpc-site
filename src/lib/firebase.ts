import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBDrvqlXljpEsQH4FIki6x7uOLWesgu5dE',
  authDomain: 'tocpc-2021-2.firebaseapp.com',
  projectId: 'tocpc-2021-2',
  storageBucket: 'tocpc-2021-2.appspot.com',
  messagingSenderId: '348178823335',
  appId: '1:348178823335:web:214f66043f8d13ada34382',
  measurementId: 'G-Y0PZHQELG4',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
