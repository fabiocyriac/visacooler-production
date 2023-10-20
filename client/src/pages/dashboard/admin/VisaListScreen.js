import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteVisa, getVisas } from '../../../redux/features/visa/visaService';
import { useDispatch, useSelector } from 'react-redux';
import category7 from '../../../assets/icons/python.png'
import Loading from '../../../components/shared/Loading';
import { toast } from 'react-toastify';
import TitleCard from '../../../components/Cards/TitleCard';

const initialState = {
  searchCountry: 'Select',
  searchType: 'all',
  searchCompany: 'all',
  sort: 'latest',
};

const VisaListScreen = () => {
  const dispatch = useDispatch();
  const { visas, loading, page, successDelete, failureDelete, error } = useSelector(state => state.visa)
  const { user } = useSelector(state => state.auth)


  useEffect(() => {
    const currentVisa = { ...initialState, page, partner: user && user.isPartner ? user._id : 'all' };
    dispatch(getVisas(currentVisa));
  }, []);

  useEffect(() => {
    if (successDelete) {
      toast.success("User Deleted Successfully!!!");
      const currentVisa = { ...initialState, page };
      dispatch(getVisas(currentVisa));
    } else if (failureDelete) {
      toast.error(error);
      const currentVisa = { ...initialState, page };
      dispatch(getVisas(currentVisa));
    }
  }, [successDelete, failureDelete]);

  const deleteHandler = (visa) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteVisa(visa._id));
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-right'">
        <div className='md:block hidden'></div>
        <div className='md:block hidden'></div>
        <div className='md:block hidden'></div>
        <Link key={visas._id} to={{ pathname: `/add-visa` }}>
          <button className='btn btn-primary btn-sm w-full'>
            Add Visa
          </button>
        </Link>
      </div>


      <div className='mt-12 grid gap-y-8'>

        {visas.map((visa) => {
          const { country, visaType, price, _id } = visa;
          return (
            <div
              key={_id}
              to={{ pathname: `/visas/${_id}` }}
              state={{ visas: visa }}
              className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-3xl hover:shadow-2xl duration-300 group'>
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
                  <span className="line-through text-green-600 font-bold pr-2">{price}</span><span className="text-green-600 font-bold">{price}</span>
                </div>
                <Link
                  key={_id}
                  to={{ pathname: `/visas/${visa._id}/edit-visa` }}>
                  <button className='btn btn-secondary btn-md mr-2'>
                    Edit
                  </button>
                </Link>
                <button className='btn btn-secondary btn-md mr-2' onClick={() => deleteHandler(visa)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default VisaListScreen;
