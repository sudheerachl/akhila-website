import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FcVoicePresentation, FcInspection, FcDataProtection } from 'react-icons/fc';

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
            <p className="text-sm text-white/70">This clinic makes sure a highly</p>
            <p className="text-sm text-white/70">tested and secured environment</p>
          </div>
        </div>
      </div>

      {/* Myths Busted Section */}
      <div className="myths-section mt-10">
        <h2 className="text-2xl font-bold text-center my-4">Myths About Homeopathy – Busted!</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Myth 1:</strong> Homeopathy is just placebo.<br />
            <em>Fact:</em> Homeopathy has shown positive results in various clinical studies and is used globally by millions.
          </li>
          <li>
            <strong>Myth 2:</strong> Homeopathy works slowly.<br />
            <em>Fact:</em> Homeopathy can act quickly, especially in acute conditions, when remedies are chosen correctly.
          </li>
          <li>
            <strong>Myth 3:</strong> Homeopathy cannot treat severe illnesses.<br />
            <em>Fact:</em> Homeopathy has proven effective in treating both chronic and acute conditions.
          </li>
          <li>
            <strong>Myth 4:</strong> Homeopathy is not a science.<br />
            <em>Fact:</em> Homeopathy is based on scientific principles of stimulating the body’s self-healing mechanisms.
          </li>
          <li>
            <strong>Myth 5:</strong> Homeopathic remedies contain steroids.<br />
            <em>Fact:</em> Homeopathic medicines are derived from natural substances and do not contain steroids.
          </li>
          <li>
            <strong>Myth 6:</strong> Homeopathy requires strict dietary restrictions.<br />
            <em>Fact:</em> While certain foods may be avoided during treatment, no strict restrictions apply universally.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LargeCard;
