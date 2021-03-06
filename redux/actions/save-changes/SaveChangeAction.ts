import {
  SAVE_GLOBAL_STATE,
  SAVE_GLOBAL_STATE_SUCCESS,
  SAVE_GLOBAL_STATE_FAILURE
} from '../../types';
import axios from 'axios';
import {Dispatch} from 'redux';
import {appState} from '../../reducer';
import {UserDispatchTypes} from '../../@types/globalSttingsActionsTypes';

export const saveChangeActions = () => {
  return async (dispatch: Dispatch<UserDispatchTypes>, getState: () => appState) => {
    dispatch({
      type: SAVE_GLOBAL_STATE
    });
    try {
      const user_settings = getState().user.user;
      console.log('configuraciones del usuario', user_settings);
      await axios.post('/api/user-settings', user_settings);
      dispatch({
        type: SAVE_GLOBAL_STATE_SUCCESS, 
        payload: user_settings
      });
    } catch (error) {
      console.log(error);
      console.log('Hubo un error en la accion de Salvar estado');
      dispatch({
        type: SAVE_GLOBAL_STATE_FAILURE
      });
    }
  }
};