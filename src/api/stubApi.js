import Promise from 'promise';

import { startingNumber } from '../../config/config.json';

export function getInitialCounter() {
  return new Promise(resolve => resolve(startingNumber));
}
