import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function RenderImages({currentColors}) {
        return (
            <div className="pdp-carousel-images-wrapper-content">
                <CarouselProvider
                    naturalSlideWidth={42}
                    naturalSlideHeight={50}
                    totalSlides={2}
                    dragStep={1}
                    currentSlide={0}
                    className="product-image-carousel"
                    
                >
                    <div className="swiper-container-horizontal">
                   
                        <Slider>
                            <Slide index={0} id="carousel__slide">
                                <Image hasMasterSpinner="true">
                                    <img className="product-image-1" src={currentColors.image1}></img>
                                </Image>
                            </Slide>
                            <Slide index={1} id="carousel__slide">
                                <Image hasMasterSpinner="true">
                                    <img className="product-image-2" src={currentColors.image2}></img>
                                </Image>    
                            </Slide>
                        </Slider>
                        <div className="dots">
                            <Dot slide={0} id="dot" disabled="null">
                            </Dot>
                            <Dot slide={1} id="dot" disabled="null">
                            </Dot>
                        </div> 
                        <ButtonBack className="arrows">
                            <Image>
                                <img className="left-arrow" src="https://lulupics.s3.us-east-2.amazonaws.com/Arrows/Left.jpg" />
                            </Image>
                        </ButtonBack>
                        <ButtonNext className="arrows">
                            <Image>
                                <img className="right-arrow" src="https://lulupics.s3.us-east-2.amazonaws.com/Arrows/Right.jpg" />
                            </Image>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        )
}

export default RenderImages;