import React, { useEffect, useState } from "react";

const Faculty = () => {
  const [randomText, setRandomText] = useState("");
  const homoeopathyPictures = [
    "https://i.imgur.com/1234567.jpg",
    "https://i.imgur.com/8901234.jpg",
    "https://i.imgur.com/5678901.jpg",
  ];

  useEffect(() => {
    fetch("https://random-text-api.com/api/paragraphs/1")
      .then((response) => response.json())
      .then((data) => setRandomText(data.paragraphs[0]));
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <div
        className="bg-image w-full h-full"
        style={{
          backgroundImage: `url(${homoeopathyPictures[Math.floor(Math.random() * homoeopathyPictures.length)]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white opacity-75 p-4 sm:p-6 md:p-8 rounded-md max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold">About us</h1>
          <p className="text-base sm:text-lg">{randomText}</p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
