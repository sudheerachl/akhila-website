import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcVoicePresentation, FcInspection, FcApproval, FcDataProtection } from "react-icons/fc";
import "./largecard.css";

const LargeCard = (props) => {
  const loadcontent = props.load;
  return (
    <div className="px-4 py-5">
      <h1 className="text-[#0e21fe] text-2xl sm:text-3xl px-4">SAI SAHITHRA HOMOEO CLINIC</h1>
      <div className="flex flex-col lg:flex-row justify-between py-5">
        <div className="text-2xl sm:text-3xl font-semibold mb-4 lg:mb-0">
          <p className="font-extrabold text-4xl sm:text-5xl text-black">Heal.</p>
          <p className="font-bold text-4xl sm:text-5xl text-black">Thrive.</p>
          <p className="font-bold text-4xl sm:text-5xl text-black">Flourish.</p>

          <div className="text-[#2e2e2e] font-medium mt-4">
            <p>We are not just a clinic; we are your wellness partner.</p>
            <p className="mt-2">
              Homeopathy: an ancient yet reliable method towards optimal health and wellness. This is the path towards your thriving health.
            </p>
            <p className="mt-2">
              We strive to help you lead healthy lives and promote your positive health and well-being even beyond the simple absence of disease.
            </p>
            <p className="mt-2">
              An experienced team strives to provide you with natural vitality that will last for a long time.
            </p>
            <p className="mt-2">Start your journey towards a better life with homeopathy to discover its power.</p>
          </div>

          <div className="bg-[#0e21fe] w-fit px-5 py-3 shadow-lg shadow-blue-700/60 text-base text-white font-normal rounded-full mt-5">
            <p className="flex items-center justify-center gap-3">
              Get in Touch
              <span className="bg-white/20 p-1 rounded-full">
                <Link onClick={loadcontent} to="/contact">
                  <AiOutlineArrowRight />
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r mt-14 to-blue-300 rounded-t-3xl from-blue-700 via-[#3453ff] flex p-6 justify-between flex-wrap flex-row">
        <div className="flex justify-center p-3 items-center w-full sm:w-1/2 lg:w-1/4">
          <FcVoicePresentation className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">24/7</p>
            <p className="text-sm text-white/70">Online Support available</p>
            <p className="text-sm text-white/70">at almost any time</p>
          </div>
        </div>

        <div className="p-3 flex justify-center items-center w-full sm:w-1/2 lg:w-1/4">
          <FcInspection className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">Online Booking</p>
            <p className="text-sm text-white/70">Book your appointment from</p>
            <p className="text-sm text-white/70">anywhere with just one click</p>
          </div>
        </div>

        <div className="p-3 flex justify-center items-center w-full sm:w-1/2 lg:w-1/4">
          <FcDataProtection className="h-20 w-20 bg-white rounded-2xl mr-2 brightness-110" />
          <div className="flex flex-col">
            <p className="text-white font-semibold">Trusted and Secure</p>
            <p className="text-sm text-white/70">Our team makes sure a Highly</p>
            <p className="text-sm text-white/70">Tested and Secured Environment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
