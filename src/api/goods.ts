import { Phone } from '../types/phones/phone';
import { client } from '../utils/fetchClient';

export function getGoods(url: string) {
  return client.get<Phone[]>(url);
}
