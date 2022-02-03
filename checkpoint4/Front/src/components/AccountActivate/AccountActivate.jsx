import React from 'react';
import './AccountActivate.css';

const AccountActivate = () => {
  return (
    <div className="account-activate-container">
      <form className="activate-form">
        <h1>Activate Account</h1>
        <div className="inputs">
          <input type="password" placeholder="Mot de passe" />
          <input type="password" placeholder="Mot de passe" />
        </div>
        <div className="button">
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountActivate;
