import React from 'react';
import { PiCaretCircleDoubleRightFill } from 'react-icons/pi';
import { RiCopperCoinFill } from 'react-icons/ri';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';

const Ribbon = ({ name, stats }) => {
  return (
    <>
      <div className="grid grid-cols-2 px-1 text-lg text-blue-900 border-2 shadow-2 lg rounded-xl">
        {name === 'skip' && (
          <div className="my-auto ml-0 text-blue-600">
            <PiCaretCircleDoubleRightFill />
          </div>
        )}

        {name === 'coin' && (
          <div className="my-auto text-yellow-600">
            <RiCopperCoinFill />
          </div>
        )}
        {name === 'correct' && (
          <div className="my-auto text-green-600">
            <FaCheckCircle />
          </div>
        )}
        {name === 'incorrect' && (
          <div className="my-auto text-red-600">
            <FaTimesCircle />
          </div>
        )}
        <p className="">{stats} </p>
      </div>
    </>
  );
};

export default Ribbon;
