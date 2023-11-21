import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";





export const useStorage = (file)=>{
  const [Progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() =>{
    // const storageRef = ref(file.name);

    // storageRef.put(file).on('state_changed', (snap) => {
    //   let uploadPercentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //   setProgress(uploadPercentage);
    // }, (err)=>{
    //   setError(err)
    // }, async ()=>{
    //   const url = await storageRef.getDownloadUrl();
    //   setUrl(url);
    // })

 

    const storage = getStorage();
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

      }, 
      (error) => {
        console.error(error);
      }, 
      () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }, [file]);
  return { Progress, url, error }
}