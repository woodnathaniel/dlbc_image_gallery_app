import React, { useState } from 'react'
import UploadProgressBar from './UploadProgressBar'
import { useFirestore } from '../hooks/useFirestore'

const UploadForm = () => {

  const  [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const fileType = ['image/jpeg', 'image/png']

  const changeHandler=(e) => {
    const selected = e.target.files[0]

    if (selected && fileType.includes(selected.type)){
      setFile(selected)
      
      setError(null)
    }
    else{
      if(selected === undefined){
        setFile(null)
        setError(null)
      }
      else{
        setFile(null)
        setError('please file type must be a jpeg or png')
      }
      
    }
    
  }
  
  return (
    <div>
      <form>
        <input type='file' onChange={changeHandler}/>
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          
          {file && <UploadProgressBar file={file} setFile={setFile}/>}
        </div>
      </form>
    </div>
  )
}

export default UploadForm