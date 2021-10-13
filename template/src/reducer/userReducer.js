import {SET_USER} from '../constants/userTypes';

const initialState = {id: null, name: 'Weston'};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER:
      return {...state, ...payload};

    default:
      return state;
  }
};
