import { useRef, useState } from 'react';
import './Login.css';
const Login = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
            name="username"
            ref={titleInputRef}
            value={userName}
            placeholder=" Enter your email "
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="text"
            name="password"
            value={password}
            placeholder=" Enter your password "
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
        <a href="/signup">Create an account</a>
      </div>
    </div>
  );
};

export default Login;
