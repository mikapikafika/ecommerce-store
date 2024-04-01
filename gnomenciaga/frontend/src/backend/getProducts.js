import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase'; // assuming firebase.js is in the same directory

export async function getProducts() {
    const productsCollection = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCollection);
    return productsSnapshot.docs.map(doc => doc.data());
}

getProducts().then(products => console.log(products));