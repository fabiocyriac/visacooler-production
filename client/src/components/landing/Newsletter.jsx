import banner from '../../assets/newsletter.jpg';
import Banner from '../shared/Banner';

const Newsletter = () => {
    return (
<div className="md:px-14 p-4 max-w-screen-2xl my-12">
      <Banner banner={banner} heading={"Each student an share their discount code for friends"} subheading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”" btn1="I have a code" btn2=""/>
    </div>
    );
};

export default Newsletter;