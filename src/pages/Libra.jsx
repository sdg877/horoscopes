import React, { useState, useEffect, useCallback } from 'react';
import SignPage from '../components/SignPage';
import '../App.css';

const Libra = () => {
  const [prediction, setPrediction] = useState('');
  const [timePeriod, setTimePeriod] = useState('today');
  const [error, setError] = useState(null);


  const fixHoroscopeData = (data) => {
    return data.replace(/(\.)(\S)/g, '$1 $2');
  };


  const fetchHoroscope = useCallback(async (timePeriod) => {
    try {
      const apiHost = process.env.REACT_APP_X_RAPIDAPI_HOST;
      const apiKey = process.env.REACT_APP_X_RAPIDAPI_KEY;

      if (!apiHost || !apiKey) {
        setError('API credentials are missing.');
        return;
      }

      const apiUrl = `https://${apiHost}/api/Daily-Horoscope-English/?zodiacSign=libra&timePeriod=${timePeriod}`;

      const response = await fetch(apiUrl, {
        headers: {
          'X-RapidAPI-Host': apiHost,
          'X-RapidAPI-Key': apiKey,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch horoscope');

      const data = await response.json();
      const cleanedPrediction = fixHoroscopeData(data.prediction);  
      setPrediction(cleanedPrediction);  
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }, []); 

  useEffect(() => {
    fetchHoroscope(timePeriod);
  }, [timePeriod, fetchHoroscope]);  

  return (
    <SignPage signName="Libra" backgroundColor="#FFB6C1">
      <div className="prediction">
        {error ? (
          <p className="error">Error: {error}</p>
        ) : prediction ? (
          <p>{prediction}</p>
        ) : (
          <p>Loading horoscope...</p>
        )}
      </div>
      <div className="controls">
        <button
          className={timePeriod === 'yesterday' ? 'active' : ''}
          onClick={() => setTimePeriod('yesterday')}
        >
          Yesterday
        </button>
        <button
          className={timePeriod === 'today' ? 'active' : ''}
          onClick={() => setTimePeriod('today')}
        >
          Today
        </button>
        <button
          className={timePeriod === 'tomorrow' ? 'active' : ''}
          onClick={() => setTimePeriod('tomorrow')}
        >
          Tomorrow
        </button>
      </div>
    </SignPage>
  );
};

export default Libra;
