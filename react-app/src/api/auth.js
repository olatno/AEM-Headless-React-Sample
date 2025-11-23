import axios from 'axios';

// Simple bearer token client — replace token retrieval with secure storage
export function createAemClient({ baseURL, token }) {
  const client = axios.create({ baseURL, withCredentials: true });
  if (token) client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return client;
}

// dev only — basic auth header
export function createAemClientBasic({ baseURL, username, password }) {
  const token = btoa(`${username}:${password}`);
  return createAemClient({ baseURL, token: `Basic ${token}` });
}
