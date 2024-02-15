// firebaseUtils.js
import { push, ref, set, getDatabase } from 'firebase/database';
import Swal from 'sweetalert2';
import app from '@/config/firebase';
import withReactContent from 'sweetalert2-react-content';

export const pushDataToFirebase = async (path, data) => {
  try {
    const dataRef = ref(database, path);
    await push(dataRef, data);
    console.log('Data pushed to Firebase successfully');
  } catch (error) {
    console.error('Error pushing data to Firebase:', error.message);
  }
};

const MySwal = withReactContent(Swal);
const database = getDatabase(app);
export function PushCategoriesToFirebase(categories) {
    const userId = '12345'
    set(ref(database, 'users/categories/' + userId), {
        categories
      })
      .then(() => {
        MySwal.fire({
            title: 'Submitted!',
            text: 'You have completed the document classification journey.',
            icon: 'success',
          });
      })
      .catch((error) => {
        MySwal.fire({
            title: 'Failure!',
            text: 'An error occured while submitting the data.',
            icon: 'error',
          });
      });
}
