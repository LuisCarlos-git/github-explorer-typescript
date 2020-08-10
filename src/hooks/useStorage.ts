import { Repositories } from '../interfaces/InterfaceRepositories';

export default function useStorage(data: string): Repositories[] {
  const reposStorage = localStorage.getItem(data);

  if (reposStorage) {
    return JSON.parse(reposStorage);
  }

  return [];
}
