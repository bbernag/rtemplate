import {SET_USER} from '../constants/userTypes';

export function setUser(user) {
  return {type: SET_USER, user};
}
