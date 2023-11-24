import React, {useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import PopUp from './comps/PopUp';
import PropTypes from 'prop-types'
import { Routes, Route } from 'react-router-dom';
import Home from './comps/Home';
import SignUp from './comps/SignUp';


function App() {

const [selected, setSelected] = useState(null)

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid  setSelected={setSelected}/>      
      {selected && <PopUp selected={selected} setSelected={setSelected}/>}
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes> */}
     </div>
  );
};

ImageGrid.propTypes = {
  setSelected: PropTypes.func.isRequired,
};


export default App;
