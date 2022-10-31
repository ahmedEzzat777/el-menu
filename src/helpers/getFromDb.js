import { ref, onValue } from "firebase/database";

export default function getFromDb(db, url) {
  return new Promise((resolve, reject) => {
    try {
      onValue(ref(db, url), (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      });
    } catch (e) {
      reject(e);
    }
  });
}
