import PopularVisas from './PopularVisas';
import SectionTitle from './SectionTitle';
import PopularServices from './PopularServices'

const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
      <SectionTitle text='Popular Visas' />
      <PopularVisas />
      <PopularServices/>
    </div>
  );
};
export default FeaturedProducts;
