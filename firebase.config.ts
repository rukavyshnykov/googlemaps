import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc, deleteDoc, updateDoc } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDzY8uWN8tw0lKcnaTG0N96NeGpDn2AIh4",
    authDomain: "maps-test-e438a.firebaseapp.com",
    projectId: "maps-test-e438a",
    storageBucket: "maps-test-e438a.appspot.com",
    messagingSenderId: "44156980471",
    appId: "1:44156980471:web:a5a55c8c4786a1d34fd7f2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const getMarkers = async (): Promise<Marker[]> => {
    const markersCol = collection(db, 'markers')
    const markerSnapshot = await getDocs(markersCol);
    const markerList = markerSnapshot.docs.map(doc => ({...doc.data(), id: doc.id})) 
    return markerList
}

export const postMarker = async (marker, id) => {
    const markersCollection = doc(db, 'markers', id);
    await setDoc(markersCollection, marker)
}

export const deleteMarkers = async () => {
    const collectionRef = collection(db, 'markers');
    const snapshot = await getDocs(collectionRef);

    snapshot.forEach(async (d) => {
        await deleteDoc(doc(db, 'markers', d.id));
    });
}

export const deleteExactMarker = async (id) => {
    const documentRef = doc(db, 'markers', id)
    await deleteDoc(documentRef)
}

export const updatePos = async (pos, id) => {
    const markersCollection = doc(db, 'markers', id);
    await updateDoc(markersCollection, {...pos})
}

type Marker = {
    id: string,
    location: {
        lat: number,
        lng: number 
    }
    next: string,
    timestamp: Date
}