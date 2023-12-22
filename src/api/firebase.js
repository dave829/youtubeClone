import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch((error) => console.error(error));
}

export function logout() {
  signOut(auth).catch((error) => console.error(error));
}

export function onUserStateChange(callback) {
  return onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) {
  return get(ref(database, "admins"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}

//get rate
export async function getRate(like) {
  return get(ref(database, `rate`)) //
    .then((snapshot) => {
      const items = snapshot.val();
      //console.log(items); {like: false}
      //return Object.values(items);
      return items;
    });
}

//set rate
export async function setRate(like, disLike) {
  //console.log(like + "전달");
  return set(ref(database, `rate`), {
    like: like,
    //disLike: disLike,
  });
}

//get likedVideo
export async function getLikedVideo(videos) {
  return get(ref(database, `likedVideos/filteredVideos`)) //
    .then((snapshot) => {
      const items = snapshot.val();
      //console.log(items); //[{…}, {…}]
      //return Object.values(items);
      return items;
    });
}

//get dislikedVideo
export async function getDisLikedVideo(videos) {
  return get(ref(database, `disLikedVideos/filteredDisLikedVideos`)) //
    .then((snapshot) => {
      const items = snapshot.val();
      //console.log(items); //[{…}, {…}]
      //return Object.values(items);
      return items;
    });
}

//set likedVideo 여기 영상 [{}] 저장
export async function likedVideos(filteredVideos) {
  //console.log(like + "전달");
  return set(ref(database, `likedVideos`), {
    ...filteredVideos,
    filteredVideos,
  });
}

//set dislikedVideo 여기 영상 [{}] 저장
export async function disLikedVideos(filteredDisLikedVideos) {
  //console.log(like + "전달");
  return set(ref(database, `disLikedVideos`), {
    ...filteredDisLikedVideos,
    filteredDisLikedVideos,
  });
}

//get CommentText
export async function getCommentText(text) {
  return get(ref(database, `CommentText/text`)) //
    .then((snapshot) => {
      const items = snapshot.val();
      //console.log(items); //[{…}, {…}]
      //return Object.values(items);
      return items;
    });
}

//set text
export async function setCommentText(text) {
  //console.log(like + "전달");
  return set(ref(database, `CommentText`), {
    text: text,
  });
}

// // Set 카트 (Create or Update)
// export async function addOrUpdateToCart(userId, product) {
//   return set(ref(database, `carts/${userId}/${product.id}`), product);
// }

// export async function rating(like) {
//   return set(ref(database, "rate"))
//     .then((snapshot) => {
//       const rated = snapshot.val();
//       //console.log(rated.like);
//       const like = rated.like;
//       //console.log(like);
//       return like;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// const rate = useMutation({
//   mutationFn: (product) => addOrUpdateToCart(uid, product),
//   onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
// });
