import {
  ref,
  push,
  query,
  get,
  orderByChild,
  equalTo,
} from "firebase/database";
import { database } from "./firebase-config";

export async function addUser(user) {
  const dbRef = ref(database, "/users");

  await push(dbRef, user);
}

export async function checkIfUserExists(email) {
  const dbRef = ref(database, "/users");

  const existingUserQuery = query(dbRef, orderByChild("email"), equalTo(email));

  const snapshot = await get(existingUserQuery);

  return snapshot.exists();
}

export async function getUser(email) {
  const dbRef = ref(database, "/users");

  const existingUserQuery = query(dbRef, orderByChild("email"), equalTo(email));

  const snapshot = await get(existingUserQuery);

  if (!snapshot.exists()) {
    return null;
  }

  let usersData = [];
  snapshot.forEach((childSnapshot) => {
    let userData = childSnapshot.val();

    usersData.push(userData);
  });

  return usersData[0];
}
