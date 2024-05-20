import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface ILogin {
  email: string;
  password: string;
}

// const API_BASE_URL = 'http://localhost:4000';

export const login = async (body: ILogin) => {
  const res = await axios.post(`/auth/login`, body);
  console.log('res login ', res);
  return res;
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

export const getMytoilet = async (CreateBy: any) => {
  const res = await axios.get('/toilet/mytoilet', {
    params: {createBy: CreateBy},
  });
  return res;
};