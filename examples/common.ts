/*

example

*/

import { components, paths } from '../types';

// user object example
export type User = components['schemas']['User--Full'];

// response example
export type GetCurrentUserResponse = paths['/users/me']['get']['responses']['200']['content']['application/json'];

// request example
const BASE_ENDPOINT = 'https://api.box.com/2.0';
const ACCESS_TOKEN = `Bearer ${process.env.ACCESS_TOKEN}`;

export async function getCurrentUser(): Promise<User> {
  const url = new URL(BASE_ENDPOINT);
  url.pathname = url.pathname + '/users/me';
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', ACCESS_TOKEN);
  return fetch(url.href, {
    method: 'GET',
    headers,
  }).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      console.error(response);
      throw new Error(response.statusText);
    }
  });
}
