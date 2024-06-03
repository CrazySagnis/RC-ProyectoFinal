import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ImageC from './ImageC';

const CarrouselC = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
      <ImageC urlImage={'https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/2a4f8532-78aa-43c5-9be4-4d148479226f___2dc8c33d877e87502f8e0ba22d506d96.webp'} textAlt={'imagen 1'} widImage={'100%'} />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageC urlImage={'https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/b2bf1f1a-c1e3-4f01-a740-913ac2e22f09___9927a23b932bdb8b14d0cf674efc2100.png'} textAlt={'imagen 2'} widImage={'100%'} />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageC urlImage={'https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/b2a8e93b-113a-4beb-8b49-924f80949fe4___b4fe536313b1721532f8bfd80e6ecf47.png'} textAlt={'imagen 3'} widImage={'100%'}/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ImageC urlImage={'https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/96bb0da6-b5cb-45df-8d04-ab8f399af836___5bed6f77603c58b07dfd829f3cb4ab39.webp'} textAlt={'imagen 4'} widImage={'100%'} />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ImageC urlImage={'https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/d8c6a5db-4400-4bf1-803c-97fafb7ff791___9e1037a4f43e8df0ddbc022bbcda7bb6.webp'} textAlt={'imagen 5'} widImage={'100%'} />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrouselC