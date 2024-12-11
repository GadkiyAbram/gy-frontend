import {
  services
} from './functions';

const gyrodata = {};

gyrodata.service = services;

window.gyrodata = gyrodata;

export default Promise.resolve().then(() => {
  // eslint-disable-next-line
  console.log('Gyrodata initialized');
});