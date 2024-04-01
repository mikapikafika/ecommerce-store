import {app, collection, getDocs, getFirestore} from './firebase'

const db = getFirestore(app);
export async function getProducts() {
    const productsCollection = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCollection);
    return productsSnapshot.docs.map(doc => doc.data());
}

getProducts().then(products => console.log(products));