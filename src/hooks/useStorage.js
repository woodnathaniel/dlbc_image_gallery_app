import { useState, useEffect } from "react";
import { projectStorage, db } from "../firebase/config";
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 






export const useStorage = (file)=>{
  const [Progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState('');

  useEffect(() =>{
  
    const storage = getStorage();
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

      }, 
      (error) => {
        console.error(error);
      }, 
      async () => {
        
        const url = await getDownloadURL(uploadTask.snapshot.ref)
          try {
            const docRef = await addDoc(collection(db, "images"), {
              createdAt: new Date(),
              url: url
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          console.log(url);
          setUrl(url)
        
      }
    );
  }, [file]);
  return { Progress, url, error }
}