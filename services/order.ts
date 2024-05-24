import axios from 'axios';

interface IUpdateOrderFee {
  _id: string;
  oilFee: number;
  tollwayFee: number;
  otherFee: number;
}

export const MyTask = async (driver: any) => {
  const res = await axios.get('/mobile/MyTask', {
    params: {driver: driver},
  });
  return res;
};

export const MyFinishTask = async (driver: any) => {
  const res = await axios.get('/mobile/MyFinishTask', {
    params: {driver: driver},
  });
  return res;
};

export const UpdateOrderFee = async (body: IUpdateOrderFee) => {
    const res = await axios.post('/mobile/updateOrderFee', body);
    console.log('res  updateToilet ', res);
    return res;
};

export const UpdateOrderStatus  = async (order: any) => {
  const res = await axios.post('/mobile/UpdateOrderStatus', { _id: order });
  console.log('res  updateToilet ', res);
  return res;
};

export const getOrder = async (orderId: string) => {
  const res = await axios.get('order/getOrder', { params: { _id: orderId } });
  return res;
};
