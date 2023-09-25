import logo from "../assets/logo.jpg";

// social icons
import fb from '../assets/facebook.jpg'
import insta from '../assets/instagram.jpg'
import twiteer from '../assets/twiter.jpg'
import linkdin from '../assets/linkedIn.jpg'

const Footer = () => {
  return (
    <div className="bg-primary md:px-14 p-4 max-w-full mx-auto">
      <div className="my-12 text-white flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-white">VISAX</span>
          </a>
          <p className="md:w-1/2">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence.
          </p>
          <div>
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md"
            />
            <input
              type="submit"
              value="Subscribe"
              className="py-2 px-4 rounded-md bg-secondary -ml-2"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block">
                How does it works?
              </a>
              <a href="/" className="block">
                Where to ask question?
              </a>
              <a href="/" className="block">
                How to play?
              </a>
              <a href="/" className="block">
                What is needed for this?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <p>(012) 1234-567-890</p>
              <p>123 xyz xyz</p>
              <p>qwuerybaihefv, qiwu <br />- hrebcl 095467</p>
            </ul>
          </div>
        </div>
      </div>
      <hr className=""/>

      <div className="text-white flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
        <div className="flex items-center space-x-5">
            <img src={fb} alt="" className="w-8"/>
            <img src={insta} alt="" className="w-8"/>
            <img src={twiteer} alt="" className="w-8"/>
            <img src={linkdin} alt="" className="w-8"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
