import React, { useState, useEffect } from 'react';
import { CarouselElems } from '../data/CarouselConfig';
import CarouselItem from './CarouselItem';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === Object.keys(CarouselElems).length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
      <div className='h-screen max-h-screen relative'>
        {Object.keys(CarouselElems).map((elem, index) => (
          <CarouselItem
            key={index}
            bgUrl={CarouselElems[elem].bgUrl}
            logoUrl={CarouselElems[elem].logoUrl}
            desc={CarouselElems[elem].desc}
            active={index === activeIndex}
            id={CarouselElems[elem].id}
          />
        ))}
      </div>
  );
}
