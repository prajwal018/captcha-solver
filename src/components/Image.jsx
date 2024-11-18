import React from 'react';

const Image = ({ captchaImage }) => {
  return (
    <div className="w-[80%] mx-auto mb-2 border-2 border-gray-300 rounded-md object-fit ">
      <img
        className="w-full"
        src={`data:image/svg+xml;base64,${btoa(captchaImage)}`}
        alt="CAPTCHA"
      />
    </div>
  );
};

export default Image;
