import each from 'lodash/each';
import get from 'lodash/get';
import isFunction from 'lodash/isFunction';
import set from 'lodash/set';
import {
  emptyObj,
  COUNT,
  JWT,
  LIST,
  USER,
} from 'defaults';
import { deleteCookie, setCookie } from 'client/lib/cookie';
import { closePrimus, setSocket } from 'client/request';
import { getInitialState } from './state';

export const SET_CURRENT_USER = 'USER_SET_CURRENT';
export const SET_USER = 'USER_SET_USER';

const reducer = {};

export function setCurrentUser(user) {
  const { id } = user || emptyObj;

  if (id) {
    const { jwt } = user;

    if (jwt) {
      localStorage.setItem(JWT, jwt);
      setCookie(JWT, jwt);
      setSocket(jwt);
      delete user.jwt; // eslint-disable-line no-param-reassign
    }
  } else {
    localStorage.removeItem(JWT);
    deleteCookie(JWT);
    closePrimus();
  }

  return {
    type: SET_CURRENT_USER,
    user,
  };
}

reducer[SET_CURRENT_USER] = (state, { user = emptyObj }) => {
  const { id, _id = id } = user;

  if (_id) {
    each(user, (value, field) => {
      set(state, [USER, field], value);
    });
  } else {
    set(state, [USER], null);
  }

  return state;
};

export function setUser(user = emptyObj) {
  return {
    type: SET_USER,
    user,
  };
}

reducer[SET_USER] = (state, { user = emptyObj }) => {
  const { id, _id = id } = user;

  if (!_id) {
    return state;
  }

  if (_id === COUNT) {
    set(state, [COUNT], user.count);
  } else {
    each(user, (value, field) => {
      if (field === JWT) {
        return;
      }

      set(state, [LIST, _id, field], value);
    });
  }

  return state;
};

export function userReducer(state = getInitialState(), action = emptyObj) {
  if (!isFunction(get(reducer, action.type))) {
    return state;
  }

  return reducer[action.type](state, action);
}
