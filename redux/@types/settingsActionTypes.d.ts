const SAVE_GLOBAL_STATE = 'SAVE_GLOBAL_STATE';
const SAVE_GLOBAL_STATE_FAILURE = 'SAVE_GLOBAL_STATE_FAILURE';
const SAVE_GLOBAL_STATE_SUCCESS = 'SAVE_GLOBAL_STATE_SUCCESS';
const GET_USER_INFO = 'GET_USER_INFO';
const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';
const CHANGE_CONDITIONS = 'CHANGE_CONDITIONS';
const CHANGE_CONDITIONS_FAILURE = 'CHANGE_CONDITIONS_FAILURE';
const CHANGE_CONDITIONS_SUCCESS = 'CHANGE_CONDITIONS_SUCCESS';
const CHANGE_SHOP_NAME = 'CHANGE_SHOP_NAME';
const CHANGE_AMMOUNT = 'CHANGE_AMMOUNT';
const CHANGE_CLIENT_GLOBALID = 'CHANGE_CLIENT_GLOBALID';

export interface ITSaveChanges {
  readonly type: typeof SAVE_GLOBAL_STATE,
};

export interface ITSaveChangesSuccess {
  readonly type: typeof SAVE_GLOBAL_STATE_SUCCESS,
  payload: ITDummyDataApi,
};

export interface ITSaveChangesFailure {
  readonly type: typeof SAVE_GLOBAL_STATE_FAILURE,
};

export interface ITGetUserInfo {
  readonly type: typeof GET_USER_INFO,
}

export interface ITGetUserInfoSuccess {
  readonly type: typeof GET_USER_INFO_SUCCESS,
  payload: ITDummyDataApi,
}

export interface ITGetUserInfoFailure {
  readonly type: typeof GET_USER_INFO_FAILURE,
}

export interface ITchangeConditionals {
  readonly type: typeof CHANGE_CONDITIONS,
}

export interface ITchangeConditionalsSuccess {
  readonly type: typeof CHANGE_CONDITIONS_SUCCESS,
  payload: ITDummySettings,
}

export interface ITchangeConditionalsFailure {
  readonly type: typeof CHANGE_CONDITIONS_FAILURE,
};

export interface ITChangeShopName {
  readonly type: typeof CHANGE_SHOP_NAME,
  payload: string,
}

export interface ITChangeAmmount {
  readonly type: typeof CHANGE_AMMOUNT,
  payload: string,
}

export interface ITChangeClientId {
  readonly type: typeof CHANGE_CLIENT_GLOBALID,
  payload: string,
}

type userDispatch = 
  ITSaveChanges | 
  ITSaveChangesSuccess | 
  ITSaveChangesFailure | 
  ITchangeConditionals | 
  ITchangeConditionalsSuccess | 
  ITchangeConditionalsFailure |
  ITGetUserInfo | 
  ITGetUserInfoSuccess | 
  ITGetUserInfoFailure |
  ITChangeShopName |
  ITChangeAmmount |
  ITChangeClientId;