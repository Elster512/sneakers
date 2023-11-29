import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import imageList from "../../consts/imageList";
import classes from "./MobileGallery.module.scss";
import "./MobileGallery.scss";
const MobileGallery: React.FC = () => {
  return (
    <div className={classes["container"]}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className={classes["swiper"]}
      >
        {imageList.map((pic) => (
          <SwiperSlide key={pic}>
            <img src={pic} key={pic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileGallery;
