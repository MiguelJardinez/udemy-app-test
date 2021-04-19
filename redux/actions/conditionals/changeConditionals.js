import {
  CHANGE_CONDITIONS,
  CHANGE_CONDITIONS_FAILURE,
  CHANGE_CONDITIONS_SUCCESS,
} from '../../types';
import axios from 'axios';

export const changeConditionsAction = (data) => {
  return async (dispatch) => {
    dispatch(changeConditionals());
    try {
      console.log('Cambiando la data', data);
      await axios.post('/api/conditions', data);
      dispatch(changeConditionalsSuccess(data))      
    } catch (error) {
      console.log(error);
      console.log('Hubo un error en la accion de los condicionales');
      dispatch(changeConditionalsError());
    }
  }
}


const changeConditionals = () => ({
  type: CHANGE_CONDITIONS
});

const changeConditionalsSuccess = (data) => ({
  type: CHANGE_CONDITIONS_SUCCESS,
  payload: data,
});

const changeConditionalsError = () => ({
  type: CHANGE_CONDITIONS_FAILURE
});
