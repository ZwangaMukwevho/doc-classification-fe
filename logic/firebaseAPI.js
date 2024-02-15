// firebaseAPI.js
import { getDatabase, ref, set, push } from 'firebase/database';
import app from '@/config/firebase';
// Get a reference to the database
const database = getDatabase(app);

// Function to set data in the database
export const setData = async (path, data) => {
  const dataRef = ref(database, path);
  await set(dataRef, data);
};

// Function to push data to a new child node
export const pushData = async (path, data) => {
  const dataRef = ref(database, path);
  await push(dataRef, data);
};
