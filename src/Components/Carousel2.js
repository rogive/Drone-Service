import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Carousel2(){
  return (
    <div width = "50px">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 rounded-pill"
      src="https://rectrixdrones.com/wp-content/uploads/DJI-1-Thermal-4.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 rounded-pill"
      src="https://rectrixdrones.com/wp-content/uploads/DJI-1-Thermal-4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 rounded-pill"
      src="https://rectrixdrones.com/wp-content/uploads/DJI-1-Thermal-4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  )
}

export default Carousel2