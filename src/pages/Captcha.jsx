import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CaptchaSolver from '../components/CaptchaSolver';
import Note from '../components/Note';
import Points from '../components/Points';
import Refer from '../components/Refer';
import { getSessionId } from '../utils/utils';

function Captcha() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [coinBalance, setCoinBalance] = useState(0);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0, skipped: 0 });
  const sessionId = getSessionId();
  const userId = sessionId;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${apiUrl}/stats/${userId}`);

        setCoinBalance(response.data.coinBalance);
        setStats(response.data.stats);
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    fetchStats();
  }, [userId, stats]);

  return (
    <div className="grid gap-10 p-4 text-center bg-white rounded-lg shadow-xl">
      <CaptchaSolver userId={userId} setCoinBalance={setCoinBalance} />
      <Points coinBalance={coinBalance} stats={stats} />
      <Refer />
      <Note />
    </div>
  );
}

export default Captcha;
