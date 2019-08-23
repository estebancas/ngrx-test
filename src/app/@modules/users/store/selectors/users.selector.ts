import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../@core/store';
import * as fromFeature from '../reducers';
import * as fromUsers from '../reducers/user.reducer';

import { IUser } from '../../../../@core/models/user.model';

/**
 * Selector for user state
 * Needed for futher selectors
 */
export const getUserState = createSelector(
    fromFeature.getUsersState,
    (state: fromFeature.UsersState) => state.users
);

/**
 * Get user entities level
 */
export const getUsersEntities = createSelector(getUserState, fromUsers.getUsersEntities);

/**
 * Selector for the user selected
 */
export const getSelectedUser = createSelector(
    getUsersEntities,
    fromRoot.getRouterState,
    (entities, router): IUser => {
        return router.state && entities[router.state.params.userId];
    }
);

/**
 * Get and convert entities object to an array
 */
export const getAllUsers = createSelector(
    getUsersEntities,
    (entities) => Object.keys(entities).map(id => entities[id])
);

/**
 * Get users loaded state selector
 */
export const getAllUsersLoaded = createSelector(getUserState, fromUsers.getUsersLoaded);

/**
 * Get users loading state selector
 */
export const getAllUsersLoading = createSelector(getUserState, fromUsers.getUsersLoading);
