import featureImg from "../../assets/banner.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/shared/variants";


const Tags = () => {
  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

        {/* feature cards */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
          <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-64  shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  IDP
                </h5>
              </div>
            </div>

            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-64  shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Yocket
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-64  shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  GeeBee
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-64 shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Edvoy
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-64  shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Envertiz
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-64  shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  StudyLinks
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-64  shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  StudyLinks
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-64  shadow-3xl p-8 items-center flex justify-center cursor-pointer hover:-translate-y-4 transition-all duration-300">
              <div>
                <img src={featureImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  StudyLinks
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tags;
