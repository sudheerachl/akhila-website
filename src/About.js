import React, { useState, useEffect } from "react";
import "./About.css";

// Import images for the carousel
import Image1 from './img/akhila1.jpg';
import Image2 from './img/akhila2.jpg';
import Image3 from './img/akhila3.jpg';
import Image4 from './img/akhila4.jpg';
import Image5 from './img/akhila5.jpg';
import Image6 from './img/akhila6.jpg';
import Image7 from './img/akhila7.jpg';

const About = () => {
  const images = [Image1, Image2, Image3, Image4,Image5,Image6,Image7];
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
        <h5>
         Dr. Jiddu Sai Akhila is a distinguished and passionate practitioner of alternative medicine, specializing in Homeopathy. She completed her B.H.M.S. (Bachelor of Homeopathic Medicine and Surgery) from Father Muller Homeopathic Medical College in Karnataka, India, where she excelled academically, securing the first rank in her first three years and the second rank in her final year, all with distinctions. Her exceptional dedication to her studies earned her the Presidential Gold Medal Award (2017-2023) and the prestigious Gold Scholarship under The Mukesh Batra Academic Excellence Awards. Dr. Akhila is currently pursuing her M.D. in the Practice of Medicine at the Government Homoeopathic Medical College, Bengaluru. She is also recognized as the Rajiv Gandhi University second rank holder for the 2017-2024 BHMS batch and has been felicitated by the Karnataka Homoeopathic Medical Association (K.H.M.A) for her academic excellence in B.H.M.S.
        </h5>
         <h5>

        
Research has always been at the core of Dr. Akhila’s practice and intellectual curiosity. She has actively contributed to the advancement of Homeopathy through significant research work. In 2020, she conducted and published a study titled "An observational study to evaluate the effectiveness of Piscidia erythrina 30 in Primary Insomnia using PSQI scale," under Rajiv Gandhi University grants. In 2023, she undertook research under the M.L. Dhawle Research grants, focusing on a survey study to determine the prevalent constitutional type among undergraduate students of an educational institution. A dedicated learning enthusiast, Dr. Akhila believes in continually expanding her knowledge base, participating in various academic conferences, meeting pioneering practitioners, and engaging in health camps to stay at the forefront of her field.
        </h5>
 <h5>

        
Dr. Akhila’s excellence has been recognized through numerous awards and honors. She was awarded the Best Paper Presentation Award at the RUBYCON-2024 24th Annual National Homeopathic Conference held at Father Muller Homoeopathic Medical College for her study on constitutional types among undergraduate students. She also participated in the National Homeopathic Conference – GLOBE IN GLOBULE, conducted by B.V.V.S. Homeopathic Medical College and Hospital in January 2023, where she presented her research. Her involvement extends beyond academia, as she also participated in a Poster Presentation at the INTERNATIONAL AYUSH SUMMIT held in Kanyakumari in 2023.
       </h5>
 <h5>

        
Dr. Akhila’s deep commitment to research, patient care, and academic excellence makes her a highly respected figure in the Homeopathic community. She continues to inspire others with her unwavering dedication to promoting health and wellness, backed by a strong foundation of knowledge and experience.
        </h5>
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
