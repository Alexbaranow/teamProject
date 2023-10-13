import React, { useState } from 'react';

export default function Authorization({ signInHandler }) {
  const [myInput, setMyInput] = useState('');
  const changeHandler = (e) => setMyInput(e.target.value);
  const autorization = {
    color: '#9e8068',
    fontWeight: 'semi-bold',
  };
  const emailPass = {
    color: '#9e8068',
    fontWeight: 'semi-bold',
    fontSize: '20px',
  };
  const buttonStyle = {
    backgroundColor: '#9e8068',
    border: 'black',
    fontSize: '20px',
    color: 'black',
    fontWeight: 'bold',

  };
  const registration = {
    color: 'white',
    fontSize: '25px',
    letterSpacing: '3px',
  };
  return (

    <form
      onSubmit={signInHandler}
    >
      <br />
      <h1 style={autorization} className="text-xl-center">Авторизация</h1>
      <div className="mb-3">
        <label style={emailPass} htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
        <input
          style={{ color: myInput.includes('@') ? 'black' : 'red' }}
          value={myInput}
          onChange={changeHandler}
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label style={emailPass} htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
        <input type="password" name="pass" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" style={buttonStyle} className="btn btn-primary">Войти</button>
      <br />
      <br />
      <a href="/api/auth/signup" style={registration}>Регистрация</a>
    </form>

  );
}
