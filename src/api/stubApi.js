import Promise from 'promise';

import { startingNumber } from '../../config/config.json';

export function getInitialCounter(args) {
  return new Promise((resolve, reject) => resolve(startingNumber));
};
