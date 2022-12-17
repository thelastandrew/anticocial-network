import axios from 'axios';

const endpoints = {
  users: '/users',
  auth: {
    me: '/auth/me',
    login: '/auth.login',
  },
  profile: '/profile',
  follow: '/follow',
}

const API = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-KEY': 'f99358d7-1b05-4cfc-b281-147e7e3ad8e6',
  }
});

export const usersAPI = {
  getUsers: (page, pageSize) => API.get(`${endpoints.users}?page=${page}&count=${pageSize}`)
    .then(response => response.data),
};

export const authAPI = {
  isAuth: () => API.get(endpoints.auth.me)
    .then(response => response.data),
};

export const profileAPI = {
  getProfile: (userId) => API.get(`${endpoints.profile}/${userId}`)
    .then(response => response.data),
  getStatus: (userId) => API.get(`${endpoints.profile}/status/${userId}`)
    .then(response => response.data),
  updateStatus: (status) => API.put(`${endpoints.profile}/status`, { status })
    .then(response => response.data)
};

export const followAPI = {
  follow: (userId) => API.post(`${endpoints.follow}/${userId}`)
    .then(response => response.data),

  unFollow: (userId) => API.delete(`${endpoints.follow}/${userId}`)
    .then(response => response.data),
};