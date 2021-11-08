import {
  DocumentData,
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
} from 'firebase/firestore'
import firebaseApp from './firebase'

const db = getFirestore(firebaseApp)

export const getUserRef = (uid: string) => {
  return doc(db, 'users', uid)
}

export const updateUser = (uid: string, data: DocumentData): Promise<void> => {
  const userRef = getUserRef(uid)

  return updateDoc(userRef, data)
}

export const createUser = (uid: string, data: DocumentData): Promise<void> => {
  const userRef = getUserRef(uid)

  return setDoc(userRef, data, { merge: true })
}

export const getCurrentUserData = async (
  uid: string
): Promise<null | DocumentData> => {
  const userRef = getUserRef(uid)
  const doc = await getDoc(userRef)

  if (doc.exists()) {
    return doc.data()
  } else {
    return null
  }
}

export const getDonatorsRef = () => {
  return collection(db, 'donators')
}

export const getDonators = async (): Promise<Object[]> => {
  // const donatorsRef = getDonatorsRef()
  // const querySnapshot = await getDocs(donatorsRef)

  // TODO: create type
  const donators: Object[] = [
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
    { name: 'iammarkps', amount: 1600 },
  ]
  // querySnapshot.forEach((doc) => {
  //   donators.push({ name: doc.data().name, amount: doc.data().amount })
  // })
  return donators
}

export const addDonators = (data: DocumentData): Promise<DocumentData> => {
  const donatorsRef = getDonatorsRef()
  return addDoc(donatorsRef, data)
}
