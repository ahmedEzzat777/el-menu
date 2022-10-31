import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import config from "../config";

const firebaseConfig = {
  databaseURL: config.firebaseRtdbUrl,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function getFirebaseDatabase() {
  return database;
}
