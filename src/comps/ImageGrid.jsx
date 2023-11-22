import React from 'react'
import { useFirestore } from '../hooks/useFirestore'

const ImageGrid = () => {
  const { docs } = useFirestore()
  console.log(typeof(docs));
  console.log(docs);

  return (
    <div>
     {docs && docs.map(doc => (
      <div className='img-grid' key={doc.id}>
        <img className='img-wrapper' src={doc.url} alt="" />
      </div>
     ))}
    </div>
  )
}

export default ImageGrid