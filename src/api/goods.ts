import { client } from '../utils/fetchClient';

export function getGoods<T>(url: string) {
  return client.get<T>(url);
}
