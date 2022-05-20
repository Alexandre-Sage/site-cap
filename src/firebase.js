//import {initializeApp}  from "firebase/app";
import firebase from 'firebase/compat/app';
import {getStorage,listAll,getDownloadURL} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBySHuUCZNnBUpsE5sbOvv2iS-Ao3X9B_M",
    authDomain: "site-cap-a764f.firebaseapp.com",
    databaseURL: "https://site-cap-a764f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "site-cap-a764f",
    storageBucket: "site-cap-a764f.appspot.com",
    //messagingSenderId: "914559674102",
    appId: "1:914559674102:web:f9c8cf917490e42094eed7"
};
//console.log(firebase);
export const firebaseApp=firebase.initializeApp(firebaseConfig);
export const dataBase= getStorage(firebaseApp);
export const fetchStorage=(refFolder,callBack)=>listAll(refFolder)
    .then(res=>res.items.forEach((item, i) => {
        const objectKey=item.name.split(".")[0];
        getDownloadURL(item)
        .then(res=>callBack(objectKey,res))
    }))
