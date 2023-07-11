/*

example

*/

import { components, paths } from '../types';

// user object example
export type User = components['schemas']['User--Full'];

// response example
export type GetCurrentUserResponse = paths['/users/me']['get']['responses']['200']['content']['application/json'];
