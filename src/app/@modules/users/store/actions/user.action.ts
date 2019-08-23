import { Action } from '@ngrx/store';

import { IUser } from '../../../../@core/models/user.model';

// load users actions consts
export const LOAD_USERS = '[Users] Load Users';
export const LOAD_USERS_FAIL = '[Users] Load Users Fail';
export const LOAD_USERS_SUCCESS = '[Users] Load Users Success';

// Action creators
/**
 * Load user actions
 */
export class LoadUsers implements Action {
    readonly type = LOAD_USERS;
}

/**
 * Load user actions on failure
 */
export class LoadUsersFail implements Action {
    readonly type = LOAD_USERS_FAIL;
    constructor(public payload: any) {}
}

/**
 * Load user actions on success
 */
export class LoadUsersSucess implements Action {
    readonly type = LOAD_USERS_SUCCESS;
    constructor(public payload: IUser[]) {}
}

// Action types
export type UsersAction =
    LoadUsers
    | LoadUsersFail
    | LoadUsersSucess;
