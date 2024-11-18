import React from 'react';

function Note() {
  return (
    <>
      <div className="px-2 text-sm text-left text-gray-400">
        <li>All words are case sensitive.</li>
        <li>Calculative Captchas must be solved.</li>
        <li>Length of Captchas will be between 6 to 12 charachters.</li>
        <li>There result can also be negative number eg.(5-8=-3).</li>
      </div>
    </>
  );
}

export default Note;
