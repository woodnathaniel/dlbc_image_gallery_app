import React from 'react'

const PopUp = ({selected, setSelected}) => {

  const handleClick = (e)=>{
    if (e.target.classList.contains('backdrop')){
      setSelected(null) 
    };
   
  }
  

  return (
    <div className='backdrop' onClick={handleClick} >
    {selected && <img src={selected} alt="Selected pic here" />}    
</div>
  )
}

export default PopUp;