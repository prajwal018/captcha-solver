import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from './Image';
import Skip from './Skip';
import Submit from './Submit';
import Warning from './Warning';
const apiUrl = import.meta.env.VITE_API_URL;

const CaptchaSolver = ({ userId, setCoinBalance }) => {
  const [captchaId, setCaptchaId] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    fetchCaptcha();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      handleSkip();
    }
  }, [timer]);

  const fetchCaptcha = async () => {
    try {
      const response = await axios.get(`${apiUrl}/captcha`);
      setCaptchaId(response.data.captchaId);
      setCaptchaImage(response.data.image);
      setTimer(15);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to fetch CAPTCHA. Please try again.');
    }
  };
  const handleSkip = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/validate`,
        {
          captchaId,
          userId,
          action: 'skip',
        }
      );

      setCaptchaId(response.data.newCaptcha.captchaId);
      setCaptchaImage(response.data.newCaptcha.image);
      setUserAnswer('');
      setError('');
      fetchCaptcha();
    } catch (err) {
      console.error(err);
      setError('Failed to skip CAPTCHA. Please try again.');
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/validate`,
        {
          captchaId,
          userAnswer,
          userId,
          action: 'attempt',
        }
      );
      setCoinBalance(response.data.coinBalance);
      setCaptchaId(response.data.newCaptcha.captchaId);
      setCaptchaImage(response.data.newCaptcha.image);
      setUserAnswer('');
      setError('');
      fetchCaptcha();
    } catch (err) {
      console.error(err);
      setError('Invalid CAPTCHA answer. Please try again.');
    }
  };

  return (
    <div className="captcha-solver">
      <div className="captcha-container">
        <Image captchaImage={captchaImage} />
        <Warning error={error} timer={timer} />
        <div className="grid grid-cols-3 mb-2 text-xl bg-gray-100 shadow-xl rounded-xl">
          <input
            className="col-span-2 px-2 text-sm bg-transparent rounded-xl"
            type="text"
            placeholder="Enter captcha"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <Skip handleSkip={handleSkip} />
        </div>
        <Submit handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CaptchaSolver;
