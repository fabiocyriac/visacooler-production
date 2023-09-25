import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { handleChange, clearFilters } from '../redux/features/visa/visaSlice';
import { getVisas } from '../redux/features/visa/visaService';
import FormSelect from './FormSelect';


const Filters = () => {

    useEffect(() => {
        dispatch(clearFilters());
        dispatch(getVisas());
        // eslint-disable-next-line
      }, []);

    const {
        isLoading,
        searchCountry,
        searchCompany,
        searchType,
        sort,
        sortOptions,
        visaTypeOptions,
        countryOptions,
        companyOptions,
    } = useSelector(state => state.visa);
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getVisas());
    };

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(clearFilters());
    };

    return (
        <form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/* Country */}
            <FormSelect
                label='select country'
                name='searchCountry'
                value={searchCountry}
                handleChange={handleSearch}
                list={['Select', ...countryOptions]}
                size='select-sm'
            />
            {/* CATEGORIES */}
            <FormSelect
                label='select category'
                name='searchType'
                value={searchType}
                handleChange={handleSearch}
                list={['all', ...visaTypeOptions]}
                size='select-sm'
            />
            {/* COMPANIES */}
            <FormSelect
                label='select company'
                name='searchCompany'
                value={searchCompany}
                handleChange={handleSearch}
                list={['all', ...companyOptions]}
                size='select-sm'
            />
            {/* ORDER */}
            <FormSelect
                label='sort by'
                name='sort'
                value={sort}
                handleChange={handleSearch}
                list={sortOptions}
                size='select-sm'
            />
            <div className='md:block hidden'></div>
            <div className='md:block hidden'></div>
            {/* BUTTONS */}
            <button type='submit' className='btn btn-primary btn-sm' onClick={handleSubmit} disabled={isLoading}>
                search
            </button>
            <button className='btn btn-accent btn-sm' onClick={handleReset}>
                reset
            </button>
        </form>
    );
};
export default Filters;
