import React from 'react';

function OpeningPage({ isClicked }) {
  // Get today's date

  return (
    <div className={`white-screen ${isClicked ? 'show' : ''}`}>
<div className="profile-button">👤</div>
<div className="new-post-button">🖊️</div>
    </div>
  );
}

export default OpeningPage;