import {
  ServiceNotFoundError,
  ServiceMethodNotFoundError
} from '../exceptions';
import {
  methods,
  contentTypes
} from '../../../const';

export class Service {
  constructor(request = '') {
    this._body = {};
    this._params = {};
    this._timeout = undefined;

    const parts = request.split('.');

    if (parts.length === 2) {
      this._service = parts[0].replace(/ /g, '').toLowerCase();
      this._method = parts[1];
    } else {
      this._method = parts.pop();
      this._service = parts.join('.');
    }

    if (!this._service) {
      throw new ServiceNotFoundError(this._service);
    }

    if (!this._method) {
      throw new ServiceMethodNotFoundError(this._service, this._method);
    }
  }

  body(firstArg, secondArg) {
    if (Service.isObject(firstArg) || firstArg && !secondArg) {
      this._body = firstArg;
    } else if (firstArg === 'body') {
      this._body = secondArg;
    } else {
      this._params[firstArg] = secondArg;
    }

    return this;
  }

  params(firstArg, secondArg) {
    if (Service.isObject(firstArg)) {
      if (firstArg.body) {
        this._body = firstArg.body;

        delete firstArg.body;
      }

      this._params = firstArg;
    } else if (firstArg === 'body') {
      this._body = secondArg;
    } else {
      this._params[firstArg] = secondArg;
    }

    return this;
  }

  static isObject(toCheck) {
    return Object.prototype.toString.call(toCheck) === '[object Object]';
  }

  async call(method) {
    const queryString = Object.entries(this._params).length > 0
      ? '?' +
      Object.entries(this._params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')
      : '';

    let url = `http://gy-inv.local/${this._service}/${this._method}`;

    if (queryString) {
      url += `/${queryString}`;
    }

    const options = {
      method,
      headers: {
        'Content-Type': contentTypes.APPLICATION_JSON
      }
    };

    if (method !== methods.GET) {
      options.body = JSON.stringify(this._body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
  }
}

export const services = (service) => new Service(service);