import {
  SAVE_GLOBAL_STATE,
  SAVE_GLOBAL_STATE_SUCCESS,
  SAVE_GLOBAL_STATE_FAILURE
} from '../../types';
import axios from 'axios';

export const saveChangeActions = () => {
  return async (dispatch, getState) => {
    dispatch(saveChange());
    try {
      const user_settings = getState().user.user;
      console.log('configuraciones del usuario', user_settings);
      await axios.post('/api/user-settings', user_settings);
      dispatch(saveChangeSuccess(user_settings));
    } catch (error) {
      console.log(error);
      console.log('Hubo un error en la accion de Salvar estado');
      dispatch(saveChangeFailure());
    }
  }
};

const saveChange = () => ({
  type: SAVE_GLOBAL_STATE
})
const saveChangeSuccess = (data) => ({
  type: SAVE_GLOBAL_STATE_SUCCESS,
  payload: data,
})
const saveChangeFailure = () => ({
  type: SAVE_GLOBAL_STATE_FAILURE
})