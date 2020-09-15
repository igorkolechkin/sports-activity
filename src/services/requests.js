import axios from 'axios';

export const githubApi = axios.create({ baseURL: 'https://api.github.com/' });
export const samuraiApi = axios.create({ baseURL: 'https://social-network.samuraijs.com/api/1.0/' });