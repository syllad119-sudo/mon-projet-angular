// login.mock.ts
import { Login } from '../models/login.model';
import loginData from '../../assets/user.json';

export function getUsers(): Login[] {
  return loginData.user as Login[];
}

export function checkLogin(email: string, password: string): boolean {
  const users = getUsers();
  return users.some(
    user => user.email === email && user.password === password
  );
}