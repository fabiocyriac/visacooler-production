import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getVisas } from '../../redux/features/visa/visaService';
import FormSelect from '../form/FormSelect';
import { countries } from "countries-list";
import { companyOptions } from '../../utils';
import { visaTypeOptions } from '../../utils';
import { sortOptions } from '../../utils';



const Filters = () => {
    const { loading, page } = useSelector(state => state.visa)

    const [searchCountry, setSearchCountry] = useState('Select');
    const [searchType, setSearchType] = useState('all');
    const [searchCompany, setSearchCompany] = useState('all');
    const [sort, setSort] = useState('latest');

    useEffect(() => {
        handleReset();
        const currentVisa = { page, searchCountry, searchType, searchCompany, sort, partner: 'all'};
        dispatch(getVisas(currentVisa));
    }, []);

    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
        const currentVisa = { page: 1, searchCountry, searchType, searchCompany, sort, partner: 'all'};
        dispatch(getVisas(currentVisa));
    };

    const handleReset = () => {
        setSearchCountry('Select');
        setSearchType('all');
        setSearchCompany('all');
        setSort('latest');
    };

    const getCountryList = () => {
        const countryArray = [];
        Object.keys(countries).forEach((country) => {
            countryArray.push(countries[country].name);
        });
        return countryArray.sort();
    };

    return (
        <form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/* Country */}
            <FormSelect
                label='select country'
                name='searchCountry'
                value={searchCountry}
                handleChange={(e) => setSearchCountry(e.target.value)}
                list={['Select', ...getCountryList()]}
                size='select-sm'
            />
            {/* CATEGORIES */}
            <FormSelect
                label='select category'
                name='searchType'
                value={searchType}
                handleChange={(e) => setSearchType(e.target.value)}
                list={['all', ...visaTypeOptions]}
                size='select-sm'
            />
            {/* COMPANIES */}
            <FormSelect
                label='select company'
                name='searchCompany'
                value={searchCompany}
                handleChange={(e) => setSearchCompany(e.target.value)}
                list={['all', ...companyOptions]}
                size='select-sm'
            />
            {/* ORDER */}
            <FormSelect
                label='sort by'
                name='sort'
                value={sort}
                handleChange={(e) => setSort(e.target.value)}
                list={sortOptions}
                size='select-sm'
            />

            <div className='md:block hidden'></div>
            <div className='md:block hidden'></div>
            {/* BUTTONS */}
            <button type='submit' className='btn btn-primary btn-sm' onClick={handleSubmit} disabled={loading}>
                search
            </button>
            <button className='btn btn-accent btn-sm' onClick={handleReset}>
                reset
            </button>
        </form>
    );
};
export default Filters;
