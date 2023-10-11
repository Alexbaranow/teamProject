import axios from 'axios';

export default function useUser(user) {
  const signUpHandler = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.name || !userData.password || !userData.email) return;

    axios.post('/api/auth/signup', userData)
      .then(() => {
        window.location = '/';
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.email || !userData.password) return;

    axios.post('/api/auth/signin', userData)
      .then(() => {
        window.location = '/';
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return {
    signInHandler,
    signUpHandler,
  };
}
