import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
// import '../../App.css';

// export default function SignUp() {
//   return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
// }

function SignUp() {
  return (
    <div className="signup-card">
      <form className="signup-form">
        <h1>Connect Yourself</h1>
        <div className="inputs">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
        </div>
        <div className="buttons">
          <button className="submit" type="submit">
            Connect
          </button>
          <Link to="/reset-password">
            <button className="forgot" type="button">
              Mot de passe oublié ?
            </button>
          </Link>
          <button className="new-account" type="submit">
            New account
          </button>
        </div>
      </form>
      {/* <Error /> */}
    </div>
  );
}

export default SignUp;