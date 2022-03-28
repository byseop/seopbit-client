import { Method } from 'axios';

export const upbitApi = {
  getAllMarket: {
    method: 'GET' as Method,
    url: 'https://api.upbit.com/v1/market/all'
  }
};
