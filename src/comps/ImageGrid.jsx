import React from 'react'
import { useFirestore } from '../hooks/useFirestore'

const ImageGrid = ({setSelected}) => {
  const { docs } = useFirestore('images')
  const width = ['img-wrapper', 'img-wrapper-1', 'img-wrapper-2', 'img-wrapper-3']
 

  return (
    <div className='img-grid'>
     {docs && docs.map(doc => (
      <div className={width[ Math.floor(Math.random() * 4)]} key={doc.id} onClick={()=> setSelected(doc.url)}>
        <img  src={doc.url} alt="upload here"  />
      </div>
     ))}
    </div>
  )
}

export default ImageGrid