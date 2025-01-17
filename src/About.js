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
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
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
        <h2 className="text-2xl font-bold text-center my-4">About Dr. Jiddu Sai Akhila</h2>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#2e2e2e] mb-2">🎓 Academic Achievements</h3>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="flex items-center mb-3">
              <span className="text-blue-500 mr-2">➤</span> Graduated with a B.H.M.S. from Father Muller Homeopathic Medical College, Karnataka, securing top ranks and distinctions throughout her course, consistently excelling in both theoretical and clinical subjects.
            </p>
            <p className="flex items-center mb-3">
              <span className="text-blue-500 mr-2">➤</span> Awarded the prestigious Presidential Gold Medal (2017-2023) for maintaining exceptional academic performance and leadership in medical practice, alongside the Mukesh Batra Gold Scholarship for outstanding merit.
            </p>
            <p className="flex items-center mb-3">
              <span className="text-blue-500 mr-2">➤</span> Currently pursuing an M.D. in the Practice of Medicine at Government Homoeopathic Medical College, Bengaluru, where she is exploring innovative treatment methodologies to advance holistic care.
            </p>
            <p className="flex items-center">
              <span className="text-blue-500 mr-2">➤</span> Recognized as the Rajiv Gandhi University second rank holder, a testament to her unwavering dedication to academic excellence, and felicitated by the Karnataka Homoeopathic Medical Association.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#2e2e2e] mb-2">🔬 Research Contributions</h3>
          <div className="border-l-4 border-green-500 pl-4">
            <p className="flex items-center mb-3">
              <span className="text-green-500 mr-2">➤</span> Conducted a 2020 study titled "Effectiveness of Piscidia erythrina 30 in Primary Insomnia using PSQI scale," providing critical insights into natural sleep aids and contributing valuable data to the field of homeopathic research.
            </p>
            <p className="flex items-center mb-3">
              <span className="text-green-500 mr-2">➤</span> Completed a 2023 survey study on the prevalent constitutional type among students, funded by M.L. Dhawle Research grants, offering a fresh perspective on youth health trends and their homeopathic implications.
            </p>
            <p className="flex items-center">
              <span className="text-green-500 mr-2">➤</span> Actively participates in conferences, health camps, and collaborations with interdisciplinary teams, ensuring she stays at the forefront of the latest developments in her field.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#2e2e2e] mb-2">🏆 Awards and Recognitions</h3>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="flex items-center mb-3">
              <span className="text-red-500 mr-2">➤</span> Best Paper Presentation Award at RUBYCON-2024 for her groundbreaking study on constitutional types among students, earning accolades for her innovative approach and clarity of thought.
            </p>
            <p className="flex items-center mb-3">
              <span className="text-red-500 mr-2">➤</span> Presented research at the National Homeopathic Conference – GLOBE IN GLOBULE, January 2023, where her work was lauded for its practical applicability and thorough methodology.
            </p>
            <p className="flex items-center">
              <span className="text-red-500 mr-2">➤</span> Participated in a Poster Presentation at the INTERNATIONAL AYUSH SUMMIT, Kanyakumari, 2023, showcasing innovative solutions and engaging with global health practitioners.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[#2e2e2e] mb-2">🌟 Commitment to Excellence</h3>
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="flex items-center mb-3">
              <span className="text-yellow-500 mr-2">➤</span> Dedicated to promoting health and wellness with a strong foundation of knowledge and experience, driven by a passion for improving lives through personalized care.
            </p>
            <p className="flex items-center">
              <span className="text-yellow-500 mr-2">➤</span> Inspires others with her passion for patient care, research, and academic excellence, setting a benchmark for future generations of medical professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
