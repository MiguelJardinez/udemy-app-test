import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  CHANGE_CONDITIONS,
  CHANGE_CONDITIONS_SUCCESS,
  CHANGE_CONDITIONS_FAILURE,
  SAVE_GLOBAL_STATE,
  SAVE_GLOBAL_STATE_SUCCESS,
  SAVE_GLOBAL_STATE_FAILURE,
  CHANGE_SHOP_NAME,
  CHANGE_AMMOUNT,
  CHANGE_CLIENT_GLOBALID
} from '../../types';

const initialState = {
  user: null,
  error: false,
  loading: false,
  isChanged: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SAVE_GLOBAL_STATE:
  case CHANGE_CONDITIONS:
  case GET_USER_INFO:
    return {
      ...state,
      loading: true,
      error: false,
    };

  case GET_USER_INFO_SUCCESS:
    return {
      ...state,
      user: payload,
      loading: false,
      error: false,
    };

  case CHANGE_CONDITIONS_SUCCESS:
    return {
      ...state,
      user: {...state.user, settings: payload},
      isChanged: true,
    };

  case SAVE_GLOBAL_STATE_SUCCESS:
    return {
      ...state,
      user: payload,
      isChanged: false,
    };

  case CHANGE_SHOP_NAME:
    return {
      ...state,
      user: {...state.user, shop_name: payload},
      isChanged: true,
    };

  case CHANGE_AMMOUNT:
    return {
      ...state,
      user: {...state.user, limit_ammount: payload},
      isChanged: true,
    };

  case CHANGE_CLIENT_GLOBALID:
    return {
      ...state,
      user: {...state.user, global_client_id: payload},
      isChanged: true,
    }

  case SAVE_GLOBAL_STATE_FAILURE:
  case CHANGE_CONDITIONS_FAILURE:
  case GET_USER_INFO_FAILURE:
    return {
      ...state,
      error: true,
      loading: false,
    };

  default:
    return state
  }
}
