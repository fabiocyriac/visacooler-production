import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center pr-4'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
          We are changing the way people travel
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Today's global enterprises face the challenge of getting the
          right people to the right global locations at the right time.
          For us to succeed in this challenge, we need up-to-date
          knowledge of global legal complexities, as well as the capabilities
          to deliver a truly meaningful solution.
        </p>
        <div className='mt-10'>
          <Link to='/products' className='btn btn-primary'>
            Our Visas
          </Link>
        </div>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;