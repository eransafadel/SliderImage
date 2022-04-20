import React, { useState } from "react";
import classes from "./ImageSlider.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from '@mui/material/CircularProgress';

const ImageSlider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  const [isLoading, setIsLoading] = useState(false);
  const nextSlide = () => {
    setIsLoading(false);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setIsLoading(false);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const onImageLoaded = () => {
    setIsLoading(true);
  };
  console.log(isLoading);
  

  if (!Array.isArray(sliderData) || sliderData.length <= 0) return null;
  return (
    <section className={classes.slider}>
      <ArrowBackIosNewIcon
        className={classes["left-arrow"]}
        onClick={prevSlide}
      />
      <ArrowForwardIosIcon
        className={classes["right-arrow"]}
        onClick={nextSlide}
      />
 

      {sliderData.map((item, index) => {
        return (
          <div>
            <div
              className={
                index === current ? classes["slide active"] : classes["slide"]
              }
              key={index}
            >
              {index === current && (
                <img
                  src={item}
                  onLoad={onImageLoaded}
                  alt="backgroundimage"
                  className={classes.image}
                />
              )}
            </div>

            {!isLoading && (
              <div className={classes["image-container-overlay"]}>
                <CircularProgress />
                 </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
