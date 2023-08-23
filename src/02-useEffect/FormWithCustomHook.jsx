import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  // Can you use react-hook-form library
  const { formState, email, username, password, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <div className="row mb-2">
        <div className="col">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
          />
          <input
            type="email"
            className="form-control mb-2"
            placeholder="luismi@google.com"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={onResetForm}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
