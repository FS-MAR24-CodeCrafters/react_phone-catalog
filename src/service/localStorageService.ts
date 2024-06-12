export const localStorageService = <T>(key: string) => {
  const getItem = (): T[] => {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : [];
  };

  const setItem = (data: T[]) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  return { getItem, setItem };
};
