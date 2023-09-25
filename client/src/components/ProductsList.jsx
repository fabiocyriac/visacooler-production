import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';
import { useSelector } from 'react-redux'
import course1 from '../assets/course1.png'
import course2 from '../assets/course2.png'
import course3 from '../assets/course3.jpg'


const ProductsList = () => {
  const { visas } = useSelector(state => state.visa);

  return (
    <div className='mt-12 grid gap-y-8'>
      {visas.map((visa) => {
        const { country, visaType, visaLocation } = visa.attributes;
        return (
          <Link
            key={visa.id}
            to={`/products/${visa.id}`}
            className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'>
            <img
              src={course1}
              className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'
            />
            <div className='ml-0 sm:ml-16'>
              <h3 className='capitalize font-medium text-lg'>{visaType}</h3>
              <h4 className='capitalize text-md text-neutral-content'>
                {country}
              </h4>
            </div>
            <p className='font-medium ml-0 sm:ml-auto text-lg'>
              {visaLocation}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
