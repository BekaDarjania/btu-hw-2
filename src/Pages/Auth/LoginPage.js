import React, { useState } from 'react';
import { login } from '../../services/auth';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SubmitForm = async (data) => {
    const loggedIn = await login(data);
    localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          SubmitForm();
        }}
        style={{
          width: 300,
          margin: 'auto',
          marginTop: 100,
        }}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="log in" className="btn btn-info" />
        </div>
      </form>
    </div>
  );
}
