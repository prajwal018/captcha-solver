import React from 'react';
import Ribbon from './Ribbon';

function Points({ coinBalance, stats }) {
  return (
    <>
      <div className="flex justify-around">
        <Ribbon name="coin" stats={coinBalance} />
        <Ribbon name="skip" stats={stats?.skipped} />
        <Ribbon name="correct" stats={stats?.correct} />
        <Ribbon name="incorrect" stats={stats?.incorrect} />
      </div>
    </>
  );
}

export default Points;
