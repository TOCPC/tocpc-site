import {
  DocumentData,
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore'
import firebaseApp from './firebase'

const db = getFirestore(firebaseApp)

export const updateUser = (uid: string, data: DocumentData): Promise<void> => {
  const userRef = doc(db, 'users', uid)

  return updateDoc(userRef, data)
}

export const createUser = (uid: string, data: DocumentData): Promise<void> => {
  const userRef = doc(db, 'users', uid)

  return setDoc(userRef, data, { merge: true })
}

export const getCurrentUserData = async (
  uid: string | undefined
): Promise<null | DocumentData> => {
  if (uid) {
    const userRef = doc(db, 'users', uid)

    const docSnap = await getDoc(userRef)

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return null
    }
  }

  return null
}
