import React from 'react';

export default function Registration({ signUpHandler }) {
  const registrationHead = {
    color: '#9e8068',
    fontWeight: 'semi-bold',
  };
  const title = {
    color: '#9e8068',
    fontWeight: 'semi-bold',
    fontSize: '20px',
  };
  const titlePass = {
    color: 'white',
    fontWeight: 'semi-bold',
    fontSize: '20px',
    textShadow: ' 0 0 2px 1px hsl(35, 70%, 30%),0 0 4px 4px hsla(30, 100%, 55%, 0.5),-1px 1px 2px 7px hsl(45, 60%, 95%),-3px 3px 1px 4px hsl(35, 70%, 30%), -3px 3px 4px 8px hsla(30, 90%, 55%, 0.5)',
  };
  const buttonRegistr = {
    backgroundColor: '#9e8068',
    border: 'black',
    fontSize: '20px',
    color: 'black',
    fontWeight: 'bold',
  };
  const buttonAutorization = {
    color: '#9e8068',
    fontSize: '25px',
    letterSpacing: '3px',
  };
  return (
    <form onSubmit={signUpHandler}>
      <br />
      <h1 className="text-xl-center" style={registrationHead}>Регистрация</h1>
      <div className="mb-3">
        <label style={title} htmlFor="exampleInputEmail1" className="form-label">Логин</label>
        <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label style={title} htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label style={titlePass} htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
        <input type="password" name="pass" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label style={titlePass} htmlFor="exampleInputPassword1" className="form-label">Повторите пароль</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" style={buttonRegistr} className="btn btn-primary">Зарегистрироваться</button>
      <br />
      <br />
      <a href="/" style={buttonAutorization}>Авторизация</a>
    </form>
  );
}
