import React, { useState, useEffect } from "react";
import { fetchImageUrls } from "../api/index";
import ImageSlider from "./ImageSlider";
import classes from "./ImageCarousel.module.css";

const ImageCarousel = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const myFetchImages = async () => {
      const res = await fetchImageUrls();
    
      setImages(res);
      setIsLoading(false);
    };

    myFetchImages().catch((error) => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.imagesLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <ImageSlider sliderData={images} />
    </div>
  );
};
export default ImageCarousel;
