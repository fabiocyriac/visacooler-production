import banner from "../../assets/banner.png"
import Banner from "../shared/Banner";


const Home = () => {
  return (
    <div className="md:px-14 p-4 pt-28 max-w-screen-2xl" id="home">
      <Banner banner={banner} heading={"Develop your skills without diligence"} subheading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China." btn1="Get Started" btn2="Discount"/>
    </div>
  );
};

export default Home;
