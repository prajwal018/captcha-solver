import React from 'react';

const Skip = ({ handleSkip }) => {
  return (
    <>
      <button
        onClick={handleSkip}
        className="px-3 py-1 mx-2 my-2 text-xs text-gray-100 bg-blue-900 shadow-lg rounded-xl"
      >
        Skip
      </button>
    </>
  );
};

export default Skip;
