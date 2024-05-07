import React, { useState } from 'react';
import './mainpage.css';
import './homepage.css';
import OpeningPage from './OpeningPage';
import { auth } from './firebase';
import CreateAccountPopup from './CreateAccountPopup';

function App() {
  console.log('Program started');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const [showPasswordBox] = useState(true);
  const [showUsernameBox] = useState(true);
  const validUsername = 'penis';
  const validPassword = 'penis'; 
  const [isEnterClicked, setIsEnterClicked] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const handlePasswordChange = event => {
    setPassword(event.target.value);
    if(event.target.value === validPassword) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const handleUsernameChange = event => {
    console.log('Program started');
    setUsername(event.target.value);
    if(event.target.value === validUsername) {
      setIsUsernameValid(true);
    } else {
      setIsUsernameValid(false);
    }
  };
  const handleCloseClick = () => {
    setShowModal(false);
};
const handleCreateAccount = async (email, password) => {
  console.log('handleCreateAccount called');
  try {
    console.log('Creating user...');
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    console.log('User created:', userCredential.user);
  } catch (error) {
    console.error('Error creating new user:', error);
  }
};
  const handleCreateAccountClick = () => {
    setShowModal(true);
  };

  const handleClick = () => {
    if (isUsernameValid && isPasswordValid) {
      setIsClicked(true);
      setIsEnterClicked(true);
      setShowEnter(false);
    } else {
      alert('Username or password is not valid');
    }
  };
  return (
    <div className="App">
      <OpeningPage isClicked={isClicked} />
      <div className="circle-container">
      <div 
        className={`box-1 ${isClicked ? 'grow' : ''}`} 
        onClick={isUsernameValid && isPasswordValid ? handleClick : null}
        style={{pointerEvents: isUsernameValid && isPasswordValid ? "auto" : "none"}}
      ></div>
      <div 
        className={`enter-text ${isUsernameValid && isPasswordValid ? (isEnterClicked ? 'fade-out' : '') : 'fade-out'}`} 
        onClick={isUsernameValid && isPasswordValid ? handleClick : null}
        style={{pointerEvents: isUsernameValid && isPasswordValid ? "auto" : "none"}}
      >
        Enter
      </div>   
      </div>
      {showUsernameBox && (!isUsernameValid || !isPasswordValid) && (
        <input
          type="text"
          className="username-input"
          placeholder="Enter Username"
          value={username}
          onChange={ handleUsernameChange }
        />
      )}
      {showPasswordBox && (!isUsernameValid || !isPasswordValid) && (
        <input
          type="password"
          className="password-input"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />
      )}
     <button className="create-account-button" onClick={handleCreateAccountClick}>Create Account</button>   
     <CreateAccountPopup 
     showModal={showModal}
    setShowModal={setShowModal} 
    username={username} 
    password={password} 
    auth={auth} 
    handleCloseClick={handleCloseClick} 
    handleCreateAccount={handleCreateAccount} 
/> 
</div>
  );
}

export default App;