import axios from 'axios';

export const githubApi = axios.create({ baseURL: 'https://api.github.com/' });

const instanceSamuraiApi = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a34c0d81-0c5c-401a-bceb-e19e10b5e396'
  }
});

export const samuraiApi = {
  getUsers: (page, count) => instanceSamuraiApi.get(`users?page=${ page }&count=${ count }`),
  getUser: id => instanceSamuraiApi.get(`profile/${ id }`),
  authMe: () => instanceSamuraiApi.get('auth/me'),
  subscribe: id => instanceSamuraiApi.post(`follow/${ id }`),
  unsubscribe: id => instanceSamuraiApi.delete(`follow/${ id }`)
}