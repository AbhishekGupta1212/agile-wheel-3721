
// import { Image } from '@chakra-ui/react';
// var React = require('react');
// var Carousel = require('react-responsive-carousel').Carousel;
// function Slider({data}){
//         return (
//            <div>
//     <Carousel infiniteLoop >
//       {data.map((el) => (
//        <Image src={el.image} height="auto" width="200px" />
//      ) )}
//     </Carousel>
//   </div>
          
//         );
//     }

// export default Slider

import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide) => {
        return <Image height={"100%"} src={slide.image} alt=""  />;
      })}
    </Carousel>
  );
};

export default ImageSlider;

