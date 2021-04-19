import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE
} from '../../types/';
import axios from 'axios';

export const getUSerInfoAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getUserInfo());
      const result = await axios.get('/api/conditions');
      dispatch(getUserInfoSuccess(result.data.data));
    } catch (error) {
      console.log(error);
      console.log('Hubo un error en la accion de obtener usuario');
      dispatch(getUserInfoFailure());
    }
  };
};


const getUserInfo = () => ({
  type: GET_USER_INFO
});

const getUserInfoSuccess = (data) => ({
  type: GET_USER_INFO_SUCCESS,
  payload: data,
});

const getUserInfoFailure = () => ({
  type: GET_USER_INFO_FAILURE
});
