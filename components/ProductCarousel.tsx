import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const products = [
  { image: '/images/product1.jpg', name: 'Product 1', link: '/products/product1' },
  { image: '/images/product2.jpg', name: 'Product 2', link: '/products/product2' },
  { image: '/images/product3.jpg', name: 'Product 3', link: '/products/product3' },
  { image: '/images/product4.jpg', name: 'Product 4', link: '/products/product4' },
  { image: '/images/product5.jpg', name: 'Product 5', link: '/products/product5' }
];
const ProductCarousel = () => {
  return (
    <Carousel interval={15000} controls={true} indicators={false}>
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={product.image} alt={product.name} />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p><a href={product.link} className="text-white bg-primary p-2 rounded">Buy Now</a></p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
