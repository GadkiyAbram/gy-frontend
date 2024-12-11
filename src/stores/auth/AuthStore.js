'use strict'

import {
  action,
  makeAutoObservable,
  observable,
  runInAction,
  toJS
} from 'mobx';
import AuthService from '../../services/AuthService';
import {
  methods,
  statusSuccess,
  token
} from '../../const';

class AuthStore {
  authorized = false;
  user = {};
  email = '';
  userLogin = '';
  password = '';

  constructor() {
    makeAutoObservable(this,
      {
        authorized: observable,
        user: observable,
        email: observable,
        login: observable,
        password: observable,
        setAuth: action,
        setUser: action,
        setEmail: action,
        setLogin: action,
        setPassword: action
      }
    );
  }

  setAuth = (authorized) => {
    this.authorized = authorized;
  }

  setUser = (user) => {
    this.user = user;
  }

  setEmail = (email) => {
    this.email = email;

    this.setLogin(email);
  }

  setLogin = (login) => {
    this.userLogin = login;
  }

  setPassword = (password) => {
    this.password = password;
  }

  async login() {
    try {
      const response = await gyrodata
        .service('auth.login')
        .body({
          username: this.userLogin,
          password: this.password
        })
        .call(methods.POST);

      if (
        response.data &&
        response.status === statusSuccess
      ) {
        localStorage.setItem(token, response.data);
        this.setAuth(true);
      }
    } catch (err) {
      console.error(err);
    }
  }

  logout() {
    try {
      // const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  async checkAuthenticated() {
    try {
      const response = await AuthService.checkAuthenticated();

      const parseRes = await response.json();

      parseRes === true ? this.setAuth(true) : this.setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  }
}

export default AuthStore;