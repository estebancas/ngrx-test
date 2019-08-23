import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromUsers from './user.reducer';

export interface UsersState {
    users: fromUsers.UserState;
}

/**
 * Register reducers
 */
export const reducers: ActionReducerMap<UsersState> = {
    users: fromUsers.reducer,
};

// Register Selectors

/**
 * Feature selector
 */
export const getUsersState = createFeatureSelector<UsersState>('users');
