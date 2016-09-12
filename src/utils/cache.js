import { isObject } from 'util';

export function write(name, data) {
  const storeData = isObject(data)
    ? JSON.stringify(data)
    : data;

  localStorage.setItem(name, storeData);
}

export function clear(name) {
  localStorage.removeItem(name, undefined);
}

export function read(name) {
  try {
    const cacheStr = localStorage.getItem(name);

    return cacheStr ? JSON.parse(cacheStr) : undefined;
  } catch (e) {
    return;
  }
}
