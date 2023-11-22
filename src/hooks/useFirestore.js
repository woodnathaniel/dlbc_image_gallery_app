import { useState, useEffect } from "react";
import { getFirestore, orderBy } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFirestore = ()=>{
  const [docs, setDocs] = useState([])
  const [isLoading, setLoading]= useState(true)

  useEffect(()=>{
   const getData  = async ()=>{
    
    const q = query(collection(db, 'images'), orderBy('createdAt', 'desc'));
    const images = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      images.push(doc.data())
    });

    setDocs(images);
   }
   getData();
  }, [collection])

  return {docs, isLoading};
}