// eslint-disable-next-line
import auth from './firebase';
import React from 'react';
import './mainpage.css';

// eslint-disable-next-line
function CreateAccountPopup({ showModal, setShowModal, username, password, auth, handleCloseClick, handleCreateAccount }) {
    console.log('here', auth, setShowModal)
    if (!showModal) {
        return null;
      }
    return (
    <div className="modal">
        <div className="modal-content">
        <h2>Create Account</h2>
        <button className="close-button" onClick={handleCloseClick}>X</button>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={() => handleCreateAccount(username, password)}>Submit</button>
        </div>
    </div>
    )
}

export default CreateAccountPopup;