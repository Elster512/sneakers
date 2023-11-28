import React from "react";
import classes from "./MainContainer.module.scss";
import Description from "../Description/Description";
import Gallery from "../Gallery/Gallery";
const MainContainer: React.FC = () => {
  return (
    <div className={classes["container"]}>
      <Gallery />
      <Description />
    </div>
  );
};

export default MainContainer;
