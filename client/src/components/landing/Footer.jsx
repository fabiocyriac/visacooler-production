import logo from "../../assets/logo.jpg";

// social icons
import fb from '../../assets/facebook.jpg'
import insta from '../../assets/instagram.jpg'
import twiteer from '../../assets/twiter.jpg'
import linkdin from '../../assets/linkedIn.jpg'

const Footer = () => {
  return (
    <div className="bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto">
      <div className="my-12 text-white flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3 mt-5"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center rounded" />
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
              <p>(+44) 7466-1793-10</p>
              <p>42 Whitehall Close <br />Uxbridge, UK <br />UB82DJ</p>
            </ul>
          </div>
        </div>
      </div>
      <hr className="" />

      <div className="text-white flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ VISAX 2023 --- 2024. All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
