import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ILogin {
  email: string;
  password: string;
}

const API_BASE_URL = 'http://localhost:4000';

export const login = async (body: ILogin) => {
  const res = await axios.post(`${API_BASE_URL}/auth/login`, body);
  console.log('res login ', res);
  return res;
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};