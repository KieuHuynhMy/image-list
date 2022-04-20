import React from "react";

const ImageList = (props) => {
  //   console.log(props.images);
  const images = props.images.map((image) => (
    <img key={image.id} src={image.webformatURL} alt="" />
  ));
  return <div>{images}</div>;
};
export default ImageList;
