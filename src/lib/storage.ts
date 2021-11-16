import { getStorage, ref, uploadBytes } from 'firebase/storage'

import firebaseApp from './firebase'

interface IUpload {
  blobUrl: any
  name: string
}

export const uploadFromBlobAsync = async ({ blobUrl, name }: IUpload) => {
  if (!blobUrl || !name) return null

  const storage = getStorage(firebaseApp)

  const imgRef = ref(storage, name)

  try {
    const blob = await fetch(blobUrl).then((r) => r.blob())
    return await uploadBytes(imgRef, blob)
  } catch (error) {
    throw error
  }
}
