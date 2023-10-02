import SectionTitle from './SectionTitle';
import 'react-multi-carousel/lib/styles.css';
import category1 from '../assets/icons/bootstrap.png';
import category11 from '../assets/icons/category11.png';
import category22 from '../assets/icons/category22.png';
import category2 from '../assets/icons/html.png';
import category3 from '../assets/icons/jquery.png';
import category4 from '../assets/icons/sass.png';
import category5 from '../assets/icons/react.png';
import category6 from '../assets/icons/java.png';
import category7 from '../assets/icons/python.png';
import category8 from '../assets/icons/mongodb.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`btn-circle ${className}`}
            style={{ ...style, background: "#eee", width: "auto", height: "auto", padding: "15px", zIndex: "40", right: "-18px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className={`btn-circle ${className}`}
        style={{ ...style, background: "#eee", width: "auto", height: "auto", padding: "15px", zIndex: "40" }}
            onClick={onClick}
        />
    );
}


const Categories = () => {
    return (
        <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full">
            <div className='pt-24'>
                <SectionTitle text='Browse Companies' />
                <div className='pt-12'>
                    <Slider {...settings}>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category11} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    Bootstrap
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FEF9EC] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category22} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    HTML
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    30 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#E4F4FB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category3} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    JQuery
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#E4F4FB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category4} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    Sass
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category5} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    React
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FEF9EC] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category6} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    Java
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#E4F4FB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category7} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    Python
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category8} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    MongoDB
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category1} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    MongoDB
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category1} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    MongoDB
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category1} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    MongoDB
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category1} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    MongoDB
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                        <div className="category-item group">

                            <div className="transition basis-[45%] md:basis-[10.93%] bg-[#FCF1EB] cursor-pointer rounded mr-3 p-5 hover:opacity-75 group hover:-translate-y-2">
                                <div className="bg-white rounded-full m-0 mx-auto w-20 h-20 p-2.5 scale-90 group-hover:scale-125">
                                    <img src={category1} alt="" className="w-16 h-16" />
                                </div>
                                <h4 className="mt-4 mb-2 font-medium">
                                    MongoDB
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    32 Courses
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </motion.div>
    );
};
export default Categories;
