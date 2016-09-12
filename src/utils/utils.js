import { publicPath } from '../../config/config.json';
const BACK_SLASH = '/';

export function prependSlash(url) {
  return url.substr(0, 1) === BACK_SLASH ? url : `${BACK_SLASH}${url}`;
}

export function trimLastSlash(url) {
  const lastChar = url.substr(-1);
  return lastChar === BACK_SLASH ? url.substring(0, url.length - 1) : url;
}

export function fixUrl(url) {
  return trimLastSlash(publicPath) + prependSlash(url);
}
