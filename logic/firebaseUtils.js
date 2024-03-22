// firebaseUtils.js
import { push, ref, set, getDatabase } from 'firebase/database';
import Swal from 'sweetalert2';
import app from '@/config/firebase';
import withReactContent from 'sweetalert2-react-content';
import { getAuthCodeFromStorage } from './authenticationUtils';
import { useRouter } from 'next/router';

export const pushDataToFirebase = async (path, data) => {
  try {
    const dataRef = ref(database, path);
    await push(dataRef, data);
  } catch (error) {
    console.error('Error pushing data to Firebase:', error.message);
  }
};

const database = getDatabase(app);

export const PushCategoriesData = async (categories) => {
    const gdriveUniqueCode = getAuthCodeFromStorage('gmail');
    const gmailUniqueCode = getAuthCodeFromStorage('gdrive');
    const uniqueId = generateUniqueId();

    try {
      set(ref(database, 'doc-classification/' + uniqueId), {
        categories: categories,
        gmailCode: gmailUniqueCode,
        gdriveCode: gdriveUniqueCode,
      });
    } catch (error) {
      console.error('Error pushing data to Firebase:', error.message);
    } 
  }

export function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}
