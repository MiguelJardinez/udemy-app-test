import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE
} from '../../types';
import axios from 'axios';
import {Dispatch} from 'redux';
import {GetInfoDispatchTypes} from '../../@types/getDataActionTypes';

export const getUSerInfoAction = () => {
  return async (dispatch: Dispatch<GetInfoDispatchTypes>) => {
    try {
      dispatch({
        type: GET_USER_INFO
      });
      const result = await axios.get('/api/conditions');
      dispatch({
        type: GET_USER_INFO_SUCCESS, 
        payload: result.data.data
      });
    } catch (error) {
      console.log(error);
      console.log('Hubo un error en la accion de obtener usuario');
      dispatch({
        type: GET_USER_INFO_FAILURE
      });
    }
  };
};
