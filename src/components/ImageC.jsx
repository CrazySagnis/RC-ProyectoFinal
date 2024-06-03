import React from 'react'

const ImageC = ({ urlImage, textAlt, widImage }) => {
  return <img src={urlImage} alt={textAlt} width={widImage} />;
};

export default ImageC;