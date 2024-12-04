import React, { useState, useEffect } from "react";
import "./About.css";

// Import images for the carousel
import Image1 from './img/1.jpg';
import Image2 from './img/2.jpg';
import Image3 from './img/3.jpg';
import Image4 from './img/4.jpg';

const About = () => {
  const images = [Image1, Image2, Image3, Image4];
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
        <p>
          Dr. Jiddu Sai Akhila is a passionate practitioner of alternative medicine – Homeopathy, 
          who pursued her B.H.M.S (Bachelor of Homeopathic Medicine and Surgery) from Father Muller 
          Homeopathic Medical College in Karnataka, India. She is a college topper who secured first 
          rank in the first three years and second rank in the final year with distinctions. 
          A believer in active participation, she has taken part in various academic, research, 
          and co-curricular activities in college and within the homeopathic fraternity. She is the 
          Presidential Gold Medal Awardee (2017-23) and recipient of the Gold Scholarship under 
          The Mukesh Batra Academic Excellence Awards.
        </p>
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
