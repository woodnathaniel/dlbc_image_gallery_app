import React from 'react';
import { useStorage } from '../hooks/useStorage';

const UploadProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
};

export default UploadProgressBar;
