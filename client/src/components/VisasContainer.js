import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Visa from './Visa';
import Alert from './Alert';
import Wrapper from '../assets/wrappers/VisasContainer';
import PageBtnContainer from './PageBtnContainer';

const VisasContainer = () => {
  const {
    getVisas,
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
  } = useAppContext();
  useEffect(() => {
    getVisas();
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
      <h5>
        {totalVisas} visa{visas.length > 1 && 's'} found
      </h5>
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
