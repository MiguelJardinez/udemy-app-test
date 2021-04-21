import {userDispatch} from '../../@types/settingsActionTypes';
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

interface ITinitialState {
  user: null | ITDummyDataApi;
  error: boolean;
  loading: boolean;
  isChanged: boolean;
}

const initialState: ITinitialState = {
  user: null,
  error: false,
  loading: false,
  isChanged: false,
};

export default (state: ITinitialState = initialState, action: userDispatch) => {
  switch (action.type) {

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
      user: action.payload,
      loading: false,
      error: false,
    };

  case CHANGE_CONDITIONS_SUCCESS:
    return {
      ...state,
      user: {...state.user, settings: action.payload},
      isChanged: true,
    };

  case SAVE_GLOBAL_STATE_SUCCESS:
    return {
      ...state,
      user: action.payload,
      isChanged: false,
    };

  case CHANGE_SHOP_NAME:
    return {
      ...state,
      user: {...state.user, shop_name: action.payload},
      isChanged: true,
    };

  case CHANGE_AMMOUNT:
    return {
      ...state,
      user: {...state.user, limit_ammount: action.payload},
      isChanged: true,
    };

  case CHANGE_CLIENT_GLOBALID:
    return {
      ...state,
      user: {...state.user, global_client_id: action.payload},
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
