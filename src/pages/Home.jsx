import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const zodiacSigns = [
    "Aquarius", "Aries", "Cancer", "Capricorn", "Gemini", "Leo", 
    "Libra", "Pisces", "Sagittarius", "Scorpio", "Taurus", "Virgo"
  ];

  return (
    <div className="home-container">
      <h1>Please select your Zodiac Sign to view your horoscope</h1>
      <div className="controls">
        {zodiacSigns.map((sign) => (
          <Link to={`/${sign.toLowerCase()}`} key={sign}>
            <button className="zodiac-button">{sign}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
