import {
  CHANGE_CONDITIONS,
  CHANGE_CONDITIONS_FAILURE,
  CHANGE_CONDITIONS_SUCCESS,
} from '../../types';
import axios from 'axios';
import {Dispatch} from 'redux';
import { ConditionsDispatchTypes } from '../../@types/conditionsActionsTypes';

export const changeConditionsAction = (data) => {
  return async (dispatch: Dispatch<ConditionsDispatchTypes>) => {
    dispatch({type: CHANGE_CONDITIONS});
    try {
      console.log('Cambiando la data', data);
      await axios.post('/api/conditions', data);
      dispatch({type: CHANGE_CONDITIONS_SUCCESS, payload: data})      
    } catch (error) {
      console.log(error);
      console.log('Hubo un error en la accion de los condicionales');
      dispatch({type: CHANGE_CONDITIONS_FAILURE});
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
