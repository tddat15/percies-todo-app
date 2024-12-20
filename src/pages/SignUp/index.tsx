import { useEffect, useRef, useState } from 'react';
import './SignUp.css';
import { apiGet } from '../../core/libs/axios';
const SignUp = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const hello = async () => {
      apiGet('/auth');
      // return await apiGet(`/auth`).then();
    };
    // apiGet('/auth');
    console.log(hello());
  }, []);

  const addNewTodoHandle = () => {};
  return (
    <div className="login-page">
      <div className="login-wrapper container">
        <div className="login-header">
          <span>
            <img
              src="https://logos-world.net/wp-content/uploads/2021/02/Trello-Logo-2016-2021.png"
              alt="logo"
              width="115px"
              height="auto"
            />
          </span>
          <h5>Log in to continue</h5>
        </div>
        <div className="form-login">
          <input
            type="text"
            name="email"
            ref={titleInputRef}
            value={firstName}
            placeholder=" Enter your email "
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            name="firstName"
            ref={titleInputRef}
            value={lastName}
            placeholder=" Enter your First name "
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="text"
            name="lastName"
            ref={titleInputRef}
            value={email}
            placeholder=" Enter your Last Name "
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            name="password"
            value={password}
            placeholder=" Enter your password "
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            name="password"
            value={password}
            placeholder=" Confirm your password "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-submit">
          <button
            type="button"
            className="loginButton"
            onClick={addNewTodoHandle}
          >
            Continue
          </button>
        </div>
        <a href="/login">Do you already have an account? Log in</a>
      </div>
    </div>
  );
};

export default SignUp;
