import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Carousel} from 'react-bootstrap';
import im from "./image-slider.module.css";


const Imageslider = () =>{
   
    return(
        <div class="image">
        <Carousel class={im.main}>
  <Carousel.Item class={im.fun}>
    <img
      className="d-block w-100"
      src="./images/lk.jpg"
      alt="First slide"
      width="100%"
      height="600px"
    />
    <Carousel.Caption>
      <h3>By S.Sooraj chakravarthy</h3>
      <p>Change the world by being yourself</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item class={im.fun}>
    <img
     className="d-block w-100"
      src="./images/stand.jpg"
      alt="First slide"
      width="100%"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Alena</h3>
      <p>The greatest glory in living lies not in never falling, but in rising every time we fall</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item class={im.fun}>
    <img
      className="d-block w-100"
      src="./images/prince.jpg"
      alt="First slide"
      width="100%"
      height="600px"
    />

    <Carousel.Caption>
      <h3>Sooraj</h3>
      <p>Sooraj is mordern, beautiful and fun.</p>
    </Carousel.Caption>
  </Carousel.Item>

    <Carousel.Item class={im.fun}>
    <img
      className="d-block w-100"
      src="./images/code2.jpg"
      alt="First slide"
      width="100%"
      height="600px"
    />

    <Carousel.Caption>
      <h3>ME</h3>
      <p>My Proffesion is to do codeing</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Imageslider;