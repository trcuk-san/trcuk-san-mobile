import axios from 'axios';

export const getMyTask = async (driver: any) => {
  const res = await axios.get('/order/getMyTask', {
    params: {driver: driver},
  });
  return res;
};