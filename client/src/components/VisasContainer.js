import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVisas } from '../redux/features/visa/visaService';
import Loading from './Loading';
import Visa from './Visa';
import Alert from './Alert';
import Wrapper from '../assets/wrappers/VisasContainer';
import PageBtnContainer from './PageBtnContainer';

const VisasContainer = () => {

  const {
    visas,
    isLoading,
    page,
    totalVisas,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    showAlert,
  } = useSelector(state => state.visa);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVisas());
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);
  if (isLoading) {
    return <Loading center />;
  }

  if (visas.length === 0) {
    return (
      <Wrapper>
        <h2>No visas to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <div className='visas'>
        {visas.map((visa) => {
          return <Visa key={visa._id} {...visa} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default VisasContainer;
