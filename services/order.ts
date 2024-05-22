import axios from 'axios';

export const MyTask = async (driver: any) => {
  const res = await axios.get('/mobile/MyTask', {
    params: {driver: driver},
  });
  return res;
};