// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [isClicked, setIsClicked] = useState(false);
//   const [showWhiteScreen, setShowWhiteScreen] = useState(false);

//   const handleClick = () => {
//     setIsClicked(true);
//     setTimeout(() => setShowWhiteScreen(true), 2000);
//   };

//   return (
// <div className="App">
//   <div className={`white-screen ${showWhiteScreen ? 'show' : ''}`}></div>
//   <div className="circle-container">
//     <div className={`box-1 ${isClicked ? 'grow' : ''}`} onClick={handleClick}></div>
//     <div className="enter-text">Enter</div>
//   </div>
//   <input type="password" className="password-input" placeholder="Enter Password" />
// </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const [showPasswordBox, setShowPasswordBox] = useState(true);

  const validPassword = 'penis'; // Set your valid password here

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value === validPassword) {
      setIsPasswordValid(true);
      setShowPasswordBox(false);
      setShowEnter(true);    
    } else {
      setIsPasswordValid(false);
      setShowEnter(false);    
    }
  };

  const handleClick = () => {
    if (isPasswordValid) {
      setIsClicked(true);
      setShowEnter(false)
    }
  };

  return (
    <div className="App">
      <div className={`white-screen ${isClicked ? 'show' : ''}`}></div>
      <div className="circle-container">
        <div className={`box-1 ${isClicked ? 'grow' : ''}`} onClick={handleClick}></div>
        <div className={`enter-text ${!showEnter ? 'fade-out' : ''}`} onClick={handleClick}>Enter</div>
      </div>
      {showPasswordBox && (
        <input
          type="password"
          className="password-input"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />
      )}
    </div>
  );
}

export default App;