import React from 'react';

export default function Registration(props) {
  console.log(props);
  return (
    <form>
      <h1 className="text-xl-center">Регистрация</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
        <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Повторите пароль</label>
        <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      <br />
      <br />
      <a href="/">Авторизация</a>
    </form>
  );
}
