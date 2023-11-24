import { useState, useEffect } from "react";
import { orderBy } from "firebase/firestore";
import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFirestore = (collections)=>{
  const [docs, setDocs] = useState([])
  const [isLoading, setLoading]= useState(true)

  useEffect(()=>{
      // const getData  = async ()=>{
      
      //   const q = query(collection(db, 'images'), orderBy('createdAt', 'desc'));
        
      //   const images = []
      //   const querySnapshot = await getDocs(q);
      //   querySnapshot.forEach((doc) => {
      //     images.push(doc.data())
      //   });

      //   setDocs(images);
      // }
      // getData();

      const q = query(collection(db, collections), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const images = [];
        querySnapshot.forEach((doc) => {
            images.push(doc.data());
        });
        setDocs(images);
      });
      
      // return ()=> unsubscribe;
  }, [collections])

  return {docs, isLoading};
}