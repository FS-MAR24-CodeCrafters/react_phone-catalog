export const BASE_URL = 'public/api/';

const request = <T>(url: string, method = 'GET'): Promise<T> => {
  const options: RequestInit = {
    method,
  };

  return fetch(BASE_URL + url, options).then((res) => res.json());
};

export const client = {
  get: <T>(url: string) => request<T>(url),
};
