import React from 'react';

const Warning = ({ error, timer }) => {
  return (
    <div className="grid items-center justify-between grid-cols-5 pr-2 mb-2 text-red-400">
      {error && <p className="grid col-span-4 col-end-5 text-sm">{error}</p>}
      <div className="grid col-span-1 col-start-5 px-3 mx-2 my-1 text-gray-100 bg-blue-900 shadow-lg rounded-xl">
        {timer} s
      </div>
    </div>
  );
};

export default Warning;
