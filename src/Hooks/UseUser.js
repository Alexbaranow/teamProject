import axios from 'axios';

export default function useUser() {
  const signUpHandler = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.name || !userData.pass || !userData.email) return;

    axios.post('/api/auth/signup', userData)
      .then(() => {
        window.location = '/groups';
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.email || !userData.pass) return;

    axios.post('/', userData)
      .then(() => {
        window.location = '/reports';
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return {
    signInHandler,
    signUpHandler,
  };
}
