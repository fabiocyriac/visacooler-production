import { Link } from 'react-router-dom';
import { formatPrice } from '../utils';
import { useSelector } from 'react-redux'
import course1 from '../assets/course1.jpg'
import category7 from '../assets/icons/python.png';
import course2 from '../assets/course2.jpg'
import course3 from '../assets/course3.jpg'


const ProductsGrid = () => {

  const { visas } = useSelector( state => state.visa);

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {visas.map((visa) => {
        const { country, visaType, _id } = visa;
        const users = [{ id: 1, name: "john" }, { id: 2, name: "charles" }];
        return (
          <Link
            key={_id}
            to={{ pathname: `/products/${_id}`}}   
            state= {{ visas: visa }}
            className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
            <figure className='px-4 pt-4'>
              <img
                src={category7}
                className='rounded-xl h-40 md:h-32 object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{country}</h2>
              <span className='text-secondary'>{visaType}</span>
              <button className='btn btn-secondary btn-md'>
                Apply Now
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
