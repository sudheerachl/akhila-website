import React, { useState, useEffect } from "react";
import "./About.css";

// Import images for the carousel
import Image1 from './img/akhila1.jpg';
import Image2 from './img/akhila2.jpg';
import Image3 from './img/akhila3.jpg';
import Image4 from './img/akhila4.jpg';
import Image5 from './img/akhila8.png';
import Image6 from './img/akhila6.jpg';
import Image7 from './img/akhila10.png';
import Image8 from './img/akhila11.png';

const About = () => {
  const images = [Image1, Image2, Image3, Image4,Image5,Image6,Image7,Image8];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-container">
      {/* Carousel Section */}
      <div className="carousel">
        <img src={images[imageIndex]} alt="Doctor" className="carousel-image" />
      </div>

      {/* About Section */}
<div className="about-section">
  <h2>About Dr. Jiddu Sai Akhila</h2>
  <div className="font-serif text-lg mt-4">
    <h3 className="font-bold text-[#2e2e2e]">Academic Achievements:</h3>
    <ul className="list-disc pl-5 mt-2">
      <li>
        Dr. Jiddu Sai Akhila, a distinguished practitioner of Homeopathy, graduated with a B.H.M.S. from Father Muller Homeopathic Medical College, Karnataka, excelling academically with top ranks in her first three years and a second rank in her final year, all with distinctions.
      </li>
      <li>
        Awarded the Presidential Gold Medal (2017-2023) and the Gold Scholarship under The Mukesh Batra Academic Excellence Awards for her outstanding performance.
      </li>
      <li>
        Currently pursuing an M.D. in the Practice of Medicine at Government Homoeopathic Medical College, Bengaluru.
      </li>
      <li>
        Recognized as the Rajiv Gandhi University second rank holder for the 2017-2024 BHMS batch and felicitated by the Karnataka Homoeopathic Medical Association (K.H.M.A).
      </li>
    </ul>
  </div>

  <div className="font-sans text-lg mt-4">
    <h3 className="font-bold text-[#2e2e2e]">Research Contributions:</h3>
    <ul className="list-square pl-5 mt-2">
      <li>
        Conducted a 2020 study titled "An observational study to evaluate the effectiveness of Piscidia erythrina 30 in Primary Insomnia using PSQI scale," funded by Rajiv Gandhi University grants.
      </li>
      <li>
        Completed a 2023 survey study on the prevalent constitutional type among undergraduate students, supported by M.L. Dhawle Research grants.
      </li>
      <li>
        Actively participates in academic conferences, health camps, and collaborations with pioneering practitioners to expand her expertise.
      </li>
    </ul>
  </div>

  <div className="font-mono text-lg mt-4">
    <h3 className="font-bold text-[#2e2e2e]">Awards and Recognitions:</h3>
    <ul className="list-circle pl-5 mt-2">
      <li>
        Won the Best Paper Presentation Award at RUBYCON-2024 for her study on constitutional types among undergraduate students.
      </li>
      <li>
        Presented research at the National Homeopathic Conference – GLOBE IN GLOBULE in January 2023, organized by B.V.V.S. Homeopathic Medical College and Hospital.
      </li>
      <li>
        Participated in a Poster Presentation at the INTERNATIONAL AYUSH SUMMIT, held in Kanyakumari in 2023.
      </li>
    </ul>
  </div>

  <div className="font-cursive text-lg mt-4">
    <h3 className="font-bold text-[#2e2e2e]">Commitment to Excellence:</h3>
    <ul className="list-disc pl-5 mt-2">
      <li>
        Demonstrates unwavering dedication to research, patient care, and academic excellence, making her a highly respected figure in the Homeopathic community.
      </li>
      <li>
        Continues to inspire others with her passion for promoting health and wellness, supported by a strong foundation of knowledge and experience.
      </li>
    </ul>
  </div>
</div>


      {/* Myths Busted Section */}
      <div className="myths-section">
        <h2>Myths About Homeopathy – Busted!</h2>
        <ul>
          <li><strong>Myth 1:</strong> Homeopathy is just placebo.<br />
            <em>Fact:</em> Homeopathy has shown positive results in various clinical studies and is used globally by millions.</li>
          <li><strong>Myth 2:</strong> Homeopathy takes too long to work.<br />
            <em>Fact:</em> Homeopathy can provide rapid relief, especially in acute conditions when the right remedy is used.</li>
          <li><strong>Myth 3:</strong> Homeopathy cannot be used alongside conventional medicine.<br />
            <em>Fact:</em> Homeopathy can complement conventional treatments, improving overall well-being.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
