import React from 'react';

const Submit = ({ handleSubmit }) => {
  return (
    <>
      <button
        onClick={handleSubmit}
        className="px-8 py-1 mx-2 mt-4 font-bold text-gray-100 bg-blue-900 shadow-2xl rounded-3xl"
      >
        submit
      </button>
    </>
  );
};

export default Submit;
