import { ref, get } from "firebase/database";
import { database } from "./firebase-config";

export async function getAllPosts() {
  const dbRef = ref(database, "/posts");
  let postsList = [];

  await get(dbRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const post = childSnapshot.val();
          postsList.push({ id: childSnapshot.key, ...post });
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return postsList;
}

export async function getFeaturedPosts() {
  const posts = await getAllPosts();

  return posts.filter((post) => post.isFeatured);
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
