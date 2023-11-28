import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./Description.module.scss";
const Description: React.FC = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["title"]}>
        <h2>SNEAKER COMPANY</h2>
        <h1>Fall Limited Edition Sneakers</h1>
      </div>
      <div className={classes["description"]}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus quas ducimus ipsa omnis blanditiis voluptates minima
          consectetur temporibus id laudantium numquam et, dicta recusandae rem.
          Aperiam ex porro minima? Quae!
        </p>
        <div>
          {" "}
          <h3>
            $125.00 <span className={classes["sale"]}>50%</span>
          </h3>
          <h4>250.00$</h4>
        </div>
        <div className={classes["controls"]}>
          <div className={classes["counter"]}>
            <RemoveIcon className={classes["icon"]} />
            <div> 0</div>

            <AddIcon className={classes["icon"]} />
          </div>
          <button>
            <ShoppingCartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
