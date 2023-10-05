import { useEffect } from 'react'
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { state } = useLocation();
  const { country, description, status, visaType, price, _id } = state.visas;
  const dollarsAmount = '$200';
  const colors = [
    "#33FF57",
    "#3366FF"
  ];

  const cartProduct = {
    cartID: _id,
    productID: _id,
    country,
    status,
    visaType,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    //dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE */}
        <img
          src={'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600'}
          alt={visaType}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        {/* PRODUCT */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{visaType}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {country}
          </h4>
          <p className='mt-3 text-xl'>{description}</p>
          {/* COLORS */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              Tags
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className='badge w-6 h-6 mr-2'
                    style={{ backgroundColor: color }}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className='form-control w-full max-w-xs'>
            <label className='label' htmlFor='amount'>
              <h4 className='text-md font-medium -tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              id='amount'
              value={dollarsAmount}
            >
              {dollarsAmount}
            </select>
          </div>
          {/* CART BTN */}
          <div className='mt-10'>
            <button className='btn btn-secondary btn-md' onClick={addToCart}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
