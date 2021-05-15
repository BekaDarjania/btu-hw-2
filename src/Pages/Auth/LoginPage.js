import React from 'react';
import { login } from '../../services/auth';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory } from 'react-router-dom';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  let history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);

    const loggedIn = await login(data);
    if (loggedIn) {
      localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
      history.replace('/main');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: 300,
          margin: 'auto',
          marginTop: 100,
        }}>
        <div className="form-group">
          <input
            defaultValue="eve.holt@reqres.in"
            required={true}
            type="email"
            {...register('email', { required: true })}
            className="form-control"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="form-group">
          <input
            defaultValue="cityslicko"
            required={true}
            type="password"
            {...register('password', { required: true })}
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
