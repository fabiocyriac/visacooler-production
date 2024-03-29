import axios from 'axios';

const productionUrl = ' https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export const visaTypeOptions = ['student-visa', 'dependent-visa', 'visitor-visa', 'work-visa'];
export const companyOptions = ['IDP', 'LeapScholar', 'Yocket', 'GeeBee', 'Edvoy', 'Studyportals'];
export const sortOptions = ['latest', 'oldest', 'a-z', 'z-a'];

