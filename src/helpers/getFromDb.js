import { ref, get } from "firebase/database";

export default function getFromDb(db, url) {
  return get(ref(db, url)).then((snapshot) => snapshot.val());
}
