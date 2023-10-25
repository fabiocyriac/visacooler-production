import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import { formatPrice } from '../../utils';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../shared/SectionTitle';
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import course1 from '../../assets/course1.jpg'
import course2 from '../../assets/course2.jpg'
import course3 from '../../assets/course3.jpg'
import { motion } from "framer-motion";
import { fadeIn } from '../shared/variants'; 

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
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
    <div
      className={`btn-circle ${className}`}
      style={{ ...style, background: "#eee", width: "auto", height: "auto", padding: "15px", zIndex: "40", right: "-14px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`btn-circle ${className}`}
      style={{ ...style, background: "#eee", width: "auto", height: "auto", padding: "15px", zIndex: "40" }}
      onClick={onClick}
    />
  );
}


const PopularServices = () => {
  const products = [
    {
      "id": 19,
      "attributes": {
        "title": "Student-Visa",
        "country": "United Kingdom",
        "company": "Modenza",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "createdAt": "2023-08-10T10:07:41.876Z",
        "updatedAt": "2023-08-10T10:16:43.298Z",
        "publishedAt": "2023-08-10T10:07:44.157Z",
        "category": "Kids",
        "image": course1,
        "price": "17999",
        "shipping": false,
        "colors": [
          "#33FF57",
          "#3366FF"
        ]
      }
    },
    {
      "id": 6,
      "attributes": {
        "title": "Visit-Visa",
        "country": "Canada",
        "company": "Modenza",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "createdAt": "2023-08-02T14:32:02.775Z",
        "updatedAt": "2023-08-04T07:35:16.880Z",
        "publishedAt": "2023-08-02T14:32:05.491Z",
        "category": "Tables",
        "image": course2,
        "price": "17999",
        "shipping": false,
        "colors": [
          "#FF5733",
          "#FFFF00"
        ]
      }
    },
    {
      "id": 7,
      "attributes": {
        "title": "Work-Visa",
        "country": "United States",
        "company": "Homestead",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "createdAt": "2023-08-02T14:34:10.146Z",
        "updatedAt": "2023-08-08T14:06:28.575Z",
        "publishedAt": "2023-08-02T14:34:13.604Z",
        "category": "Beds",
        "image": course3,
        "price": "12999",
        "shipping": false,
        "colors": [
          "#FF5733"
        ]
      }
    },
    {
      "id": 7,
      "attributes": {
        "title": "Dependent-Visa",
        "country": "Australia",
        "company": "Homestead",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "createdAt": "2023-08-02T14:34:10.146Z",
        "updatedAt": "2023-08-08T14:06:28.575Z",
        "publishedAt": "2023-08-02T14:34:13.604Z",
        "category": "Beds",
        "image": course1,
        "price": "12999",
        "shipping": false,
        "colors": [
          "#FF5733"
        ]
      }
    },
    {
      "id": 7,
      "attributes": {
        "title": "Student-Visa",
        "country": "Ireland",
        "company": "Homestead",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "createdAt": "2023-08-02T14:34:10.146Z",
        "updatedAt": "2023-08-08T14:06:28.575Z",
        "publishedAt": "2023-08-02T14:34:13.604Z",
        "category": "Beds",
        "image": course2,
        "price": "12999",
        "shipping": false,
        "colors": [
          "#FF5733"
        ]
      }
    },
    {
      "id": 7,
      "attributes": {
        "title": "Dependent-Visa",
        "country": "Newzealand",
        "company": "Homestead",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "featured": true,
        "createdAt": "2023-08-02T14:34:10.146Z",
        "updatedAt": "2023-08-08T14:06:28.575Z",
        "publishedAt": "2023-08-02T14:34:13.604Z",
        "category": "Beds",
        "image": course3,
        "price": "12999",
        "shipping": false,
        "colors": [
          "#FF5733"
        ]
      }
    }
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full">
      <div className='md:pt-24 pt-12'>
        <SectionTitle text='Popular Services' />
        <div className='pt-12 gap-4'>
          <Slider {...settings}>
            {products.map((product) => {
              const { title, price, image, country } = product.attributes;
              const dollarsAmount = formatPrice(price);
              return (

                <div className="course-item group">
                  <div
                    className="border border-gray-100 shadow-sm rounded mr-3 transition hover:shadow-md">
                    <img src={image} alt="" className="w-full rounded rounded-b-none" />
                    <div className="mt-3 p-3">
                      <div className="flex justify-between">
                        <div>
                          <h2 className="text-lg font-bold">
                            {title}
                          </h2>
                          <p className="text-sm text-gray-400 mt-2 font-medium">
                            {country}
                          </p>
                        </div>
                        <div>
                          <span className="text-green-600 font-bold">
                            Free
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 mb-4 text-xs">
                        <div className="flex mt-5 items-center">
                          <img src={avatar1} alt="" className="w-8 h-8 rounded-full z-0" />
                          <img src={avatar2} alt="" className="w-8 h-8 rounded-full z-10 -ml-4" />
                          <img src={avatar3} alt="" className="w-8 h-8 rounded-full z-10 -ml-4" />
                          <img src={avatar1} alt="" className="w-8 h-8 rounded-full z-10 -ml-4" />
                          <div
                            className="w-8 h-8 rounded-full bg-gray-100 z-10 text-gray-400 -ml-4 text-center pt-2">
                            +2
                          </div>
                          <div className="text-gray-400 ml-4">
                            Student apply
                          </div>
                        </div>
                        <section id="categories" class="mt-8">
                          <div class="container mx-auto">
                            <h2 className="text-base mt-3 mb-3 font-medium">Tags:</h2>

                            <div class="flex flex-row gap-4 items-center text-center flex-wrap pl-4 md:pl-0">
                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                              <a class="cursor-pointer">
                                <span className="bg-[#FFE7D2] text-[#FF8D3F] p-2 rounded text-[10px] font-bold">
                                  Python
                                </span>
                              </a>

                            </div>
                          </div>
                        </section>

                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};
export default PopularServices;
