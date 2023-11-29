import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "../../UI/modal/Modal";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CrossIcon from "../../../assets/close-icon.svg";
import classes from "./LigthBox.module.scss";
import "./LightBox.scss";
import { Transition } from "react-transition-group";
import { useWindowSize } from "@uidotdev/usehooks";

interface ILightBoxProps {
  close: () => void;
  imageList: any[];
  isShown: boolean;
}

const LightBox: React.FC<ILightBoxProps> = ({ close, imageList, isShown }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const handleClose = useCallback(() => {
    setThumbsSwiper(null);
    close();
  }, [close]);

  const window = useWindowSize();
  useEffect(() => {
    if (isShown && window.width && window.width <= 764) {
      setThumbsSwiper(null);
      handleClose();
    }
  }, [handleClose, isShown, window.width]);
  return (
    <Transition in={isShown} timeout={300} unmountOnExit mountOnEnter>
      {(state) => (
        <Modal onClick={handleClose} state={state}>
          <div
            className={classes["window"]}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={CrossIcon}
              className={classes["cross-icon"]}
              onClick={handleClose}
            />

            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className={classes["swiper"]}
            >
              {imageList.map((pic) => (
                <SwiperSlide key={pic}>
                  <img src={pic} key={pic} />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              onSwiper={setThumbsSwiper}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={`${classes["swiper2"]} swiper2`}
            >
              {imageList.map((pic) => (
                <SwiperSlide key={pic}>
                  <img src={pic} key={pic} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Modal>
      )}
    </Transition>
  );
};

export default LightBox;
