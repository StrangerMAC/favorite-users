import { IUserAccount } from '../types/data';

const baseURL: string = 'https://social-network.samuraijs.com/api/1.0/';
const apiKEY: string = 'b1775b2f-c3a5-4509-8dc9-90b5629de7c3';
const freeUserAccount: IUserAccount = {
  email: 'free@samuraijs.com',
  password: 'free',
  rememberMe: true,
  captcha: null,
};

export const getUsers = async (): Promise<any> => {
  const response = await fetch(baseURL + 'users?count=100', {
    credentials: 'include',
  });

  return response.json();
};

export const fetchData = async (
  totalCountOfUsers: number,
  setUsers: Function
): Promise<void> => {
  const response = await fetch(baseURL + `users?count=${totalCountOfUsers}`, {
    credentials: 'include',
  }).then((res) => res.json());

  setUsers(await response.items);
};

export const login = async (): Promise<void> => {
  await fetch(baseURL + 'auth/login', {
    method: 'POST',
    headers: {
      'API-KEY': apiKEY,
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(freeUserAccount),
  });
};

export const logout = async (): Promise<void> => {
  await fetch(baseURL + 'auth/login', {
    method: 'DELETE',
    headers: { 'API-KEY': apiKEY },
    credentials: 'include',
  });
};

export const toggleFavorite = (id: number, method: string): void => {
  fetch(baseURL + `follow/${id}`, {
    method: method,
    headers: { 'API-KEY': apiKEY },
    credentials: 'include',
  });
};
