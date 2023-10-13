import axios from 'axios';
// import { INSERT } from 'sequelize/types/query-types';

export default function useGroup() {
  const groupSubmitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    axios.post('/api/groups', formData)
      .then(() => {
        window.location = '/reports';
      });
  };
  // function onChange(token) {
  //   console.log(`Token: ${token}`);
  // }

  return {
    groupSubmitHandler,
  };
}
