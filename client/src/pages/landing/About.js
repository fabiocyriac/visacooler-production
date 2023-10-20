import { motion } from "framer-motion";
import { fadeIn } from "../../components/shared/variants";
import Img2 from "../../assets/write_for_us.png";
import { Link } from 'react-router-dom';




const About = () => {
    return (

        <>
            <div className='grid lg:grid-cols-2 items-center'>
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <div>
                        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
                            Manage immigration program seamlessly
                        </h1>
                        <ul className="text-gray-400 mt-8 ml-5 max-w-xl text-lg leading-8 list-disc marker:text-blue-600">
                            <li>Intuitive, high-level case information.</li>
                            <li>Live feed of new initiated cases.</li>
                            <li>Easy document uploads.</li>
                        </ul>
                        <div className='mt-8'>
                            <Link to='/visas' className='btn btn-primary'>
                                Our Visas
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}>

                    <img src={Img2} alt="" />

                </motion.div>
            </div>


            <section id="features" class="md:py-40 xl:py-40">
                <div class="container flex flex-col mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    <div class="flex-col space-y-12 h-full md:w-1/2">
                        <h2 class="max-w-md text-4xl font-bold lg:mx-0 sm:mx-auto md:text-left">
                            What’s different about VISAX?
                        </h2>
                        <p class="max-w-sm text-gray-400 lg:mx-0 sm:mx-auto md:text-left">
                            Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                        </p>
                    </div>
                    <div class="flex flex-col space-y-12 md:px-12 md:w-1/2">

                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div class="rounded-l-full bg-brightRedSuperLight md:bg-transparent">
                                <div class="flex items-center space-x-2">
                                    <div class="px-5 py-2 font-bold rounded-full text-[#ffff] bg-blue-500 md:py-1">
                                        01
                                    </div>
                                    <h3 class="text-base font-bold md:mb-4 md:hidden">
                                        Track company-wide progress
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 class="hidden mb-4 text-lg font-bold md:block">
                                    Track company-wide progress
                                </h3>
                                <p class="text-gray-400 lg:mx-0 sm:mx-auto md:text-left">
                                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                            </div>
                        </div>

                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div class="rounded-l-full bg-brightRedSuperLight md:bg-transparent">
                                <div class="flex items-center space-x-2">
                                    <div class="px-5 py-2 font-bold rounded-full text-[#ffff] bg-blue-500 md:py-1">
                                        02
                                    </div>
                                    <h3 class="text-base font-bold md:mb-4 md:hidden">
                                        Advanced built-in reports
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 class="hidden mb-4 text-lg font-bold md:block">
                                    Advanced built-in reports
                                </h3>
                                <p class="text-gray-400 lg:mx-0 sm:mx-auto md:text-left">
                                    Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                            </div>
                        </div>

                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div class="rounded-l-full bg-brightRedSuperLight md:bg-transparent">
                                <div class="flex items-center space-x-2">
                                    <div class="px-5 py-2 font-bold rounded-full text-[#ffff] bg-blue-500 md:py-1">
                                        03
                                    </div>
                                    <h3 class="text-base font-bold md:mb-4 md:hidden">
                                        Everything you need in one place
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 class="hidden mb-4 text-lg font-bold md:block">
                                    Everything you need in one place
                                </h3>
                                <p class="text-gray-400 lg:mx-0 sm:mx-auto md:text-left">
                                    Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;
