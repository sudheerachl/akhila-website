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
  <p>I am not just a doctor; I am your wellness partner.</p>
  <p className="mt-2">
    Homeopathy: an ancient yet reliable method towards optimal health and wellness. This is the path towards your thriving health.
  </p>
  <p className="mt-2">
    My goal is to help you lead a healthy life and promote your positive health and well-being, even beyond the simple absence of disease.
  </p>
  <p className="mt-2">
    With my experience, I strive to provide you with natural vitality that will last for a long time.
  </p>
  <p className="mt-2">Start your journey towards a better life with homeopathy and discover its power.</p>
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
            <p className="text-sm text-white/70">This clinic  makes sure a Highly</p>
            <p className="text-sm text-white/70">Tested and Secured Environment</p>
          </div>
        </div>
      </div>
    </div>
    {/* Myths Busted Section */}
<div className="myths-section">
  <h2 className="text-2xl font-bold text-center my-4">Myths About Homeopathy – Busted!</h2>
  <ul className="list-disc pl-6 space-y-4">
    <li>
      <strong>Myth 1:</strong> Homeopathy is just placebo.<br />
      <em>Fact:</em> Homeopathy has shown positive results in various clinical studies and is used globally by millions.
    </li>
    <li>
      <strong>Myth 2:</strong> Homeopathy takes too long to work.<br />
      <em>Fact:</em> Homeopathy can provide rapid relief, especially in acute conditions when the right remedy is used.
    </li>
    <li>
      <strong>Myth 3:</strong> Homeopathy cannot be used alongside conventional medicine.<br />
      <em>Fact:</em> Homeopathy can complement conventional treatments, improving overall well-being.
    </li>
    <li>
      <strong>Myth 4:</strong> Homeopathy is only effective for minor ailments.<br />
      <em>Fact:</em> Homeopathy has been successfully used to treat chronic and complex health conditions in addition to minor ailments.
    </li>
    <li>
      <strong>Myth 5:</strong> Homeopathy is not scientifically backed.<br />
      <em>Fact:</em> Homeopathy is based on well-documented principles and has been researched extensively with proven efficacy in various studies.
    </li>
    <li>
      <strong>Myth 6:</strong> Homeopathy has no side effects because it’s just water and sugar.<br />
      <em>Fact:</em> Homeopathy remedies contain potentized substances and can cause reactions when misused, but are generally safe when prescribed correctly.
    </li>
    <li>
      <strong>Myth 7:</strong> Homeopathy is not suitable for children or pregnant women.<br />
      <em>Fact:</em> Homeopathy is safe for people of all ages, including children and pregnant women, when guided by a qualified practitioner.
    </li>
    <li>
      <strong>Myth 8:</strong> Homeopathy requires lifestyle changes to work.<br />
      <em>Fact:</em> While a healthy lifestyle supports overall well-being, homeopathy does not mandate drastic changes for effectiveness.
    </li>
    <li>
      <strong>Myth 9:</strong> Homeopathy relies solely on guesswork.<br />
      <em>Fact:</em> Homeopathy is a systematized science where remedies are chosen based on a patient’s specific symptoms and constitution.
    </li>
  </ul>
</div>

  );
};

export default LargeCard;
