import { ref, push } from "firebase/database";
import { database } from "./firebase-config";

export async function sendForm(message) {
  const dbRef = ref(database, "/contacts");

  await push(dbRef, message);
}
