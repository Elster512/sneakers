import React, { useCallback, useState } from "react";
import imageList from "../../../consts/imageList";
import classes from "./Gallery.module.scss";
import LightBox from "../LightBox/LightBox";
const Gallery: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(imageList[0]);
  const [isShown, setShown] = useState(false);
  const closeLightBox = useCallback(() => {
    setShown(false);
  }, []);
  return (
    <div className={classes["container"]}>
      <img
        className={classes["current-img"]}
        src={currentImg}
        onClick={() => setShown(true)}
      />
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
      <LightBox imageList={imageList} isShown={isShown} close={closeLightBox} />
    </div>
  );
};

export default Gallery;
