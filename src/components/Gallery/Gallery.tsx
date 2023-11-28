import React, { useState } from "react";
import imageList from "../../consts/imageList";
import classes from "./Gallery.module.scss";
const Gallery: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(imageList[0]);
  return (
    <div className={classes["container"]}>
      <img className={classes["current-img"]} src={currentImg} />
      <div className={classes["img-list"]}>
        {imageList.map((pic) => (
          <img
            src={pic}
            key={pic}
            className={`${currentImg === pic ? classes["active-img"] : ""}`}
            onClick={() => setCurrentImg(pic)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
