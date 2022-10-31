import { ref, set } from "firebase/database";

export default function setOnDb(db, url, data) {
  return set(ref(db, url), data);
}
