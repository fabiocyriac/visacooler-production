import { Link, useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux'
import category7 from '../../assets/icons/python.png';

const ProductsList = () => {
  const { visas } = useSelector(state => state.visa);
  const { user } = useSelector(state => state.auth);


  return (
    <div className='mt-12 grid gap-y-8'>
      {visas.map((visa) => {
        const { country, visaType, _id } = visa;
        return (
          <div
            key={_id}
            to={{ pathname: `/visas/${_id}` }}
            state={{ visas: visa }}
            className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'>
            <div>
              <img
                src={category7}
                className='h-24 w-24 rounded-lg sm:w-32 object-cover group-hover:scale-105 transition duration-300'
              />
              <h4 className="mt-4 ml-4 mb-2 font-medium">
                StudyLinks
              </h4>
            </div>

            <div className='ml-0 sm:ml-16 mt-3'>
                <p className='capitalize font-medium text-xl'>{visaType}</p>
                <p className='capitalize text-md text-[#829ab1] mt-1'>
                  {country}
                </p>
              </div>
            <div className='font-medium ml-0 sm:ml-auto text-lg'>
              <div className="pb-4">
                <span className="line-through text-green-600 font-bold pr-2">$3,000</span><span className="text-green-600 font-bold">$2,000</span>
              </div>
              <Link
                key={_id}
                to={user? { pathname: `/visas/${_id}` } : { pathname: `/visalist/${_id}` }}
                state={{ visas: visa }}>
                <button className='btn btn-secondary btn-md mr-2'>
                  Details
                </button>
              </Link>
              <button className='btn btn-secondary btn-md'>
                Apply Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsList;
