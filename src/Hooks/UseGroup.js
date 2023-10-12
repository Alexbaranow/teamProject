import axios from 'axios';
// import { INSERT } from 'sequelize/types/query-types';

export default function useGroup() {
  const groupSubmitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    axios.post('/api/groups', formData)
      .then((res) => {
        // INSERT INTO Users (grId) VALUES (res.select)
        window.location = '/reports';
      });
  };

  return {
    groupSubmitHandler,
  };
}
