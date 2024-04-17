import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "/src/assets/css/CarouselDeliveryService.css";
import image1 from '../assets/images/servicio-domicilio/delivery-boxes.jpg';
import image2 from '../assets/images/carousel/img2.jpg';
import image3 from '../assets/images/servicio-domicilio/business-delivery-man.png';
import image4 from '../assets/images/servicio-domicilio/delivery_companies.jpeg';


function CarouselDeliveryService() {
  return (
    <Carousel fade interval={1000}>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image2} alt="First slide" style={{ position: 'absolute', bottom: '-5rem' }} />
        <Carousel.Caption>
          <h3 style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)' }}>Te lo traemos a casa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image1} alt="Second slide" style={{ position: 'absolute', bottom: '-30rem' }} />
        <Carousel.Caption>
        <h3>Te lo traemos<br />a casa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image3} alt="Third slide" style={{ position: 'absolute', bottom: '-5rem' }} />
        <Carousel.Caption>
        <h3>Te lo traemos<br />a casa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '70vh', width: '100%', position: 'relative' }}>
        <img src={image4} alt="Fourth slide" style={{ position: 'absolute', bottom: '-20rem' }} />
        <Carousel.Caption>
        <h3>Te lo traemos<br />a casa</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselDeliveryService;
