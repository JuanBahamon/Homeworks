import { db } from '../firebase/config';
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query,where
} from 'firebase/firestore';

const useCollection = (collectionName) => {
  const getAll = async (filters = []) => {
    let ref = collection(db, collectionName);
    if (filters.length > 0) {
      const conditions = filters.map(([field, op, value]) => where(field, op, value));
      ref = query(ref, ...conditions);
    }
    const snapshot = await getDocs(ref);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const add = async (data) => {
    const ref = collection(db, collectionName);
    const result = await addDoc(ref, data);
    return result.id;
  };

  const update = async (id, data) => {
    const ref = doc(db, collectionName, id);
    await updateDoc(ref, data);
  };

  const remove = async (id) => {
    const ref = doc(db, collectionName, id);
    await deleteDoc(ref);
  };

  return { getAll, add, update, remove };
};

export default useCollection;