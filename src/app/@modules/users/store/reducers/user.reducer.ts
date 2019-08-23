import * as fromUsers from '../actions/user.action';
import { IUser } from '../../../../@core/models/user.model';

export interface UserState {
    entities: { [id: string]: IUser };
    loaded: boolean;
    loading: boolean;
}

export const initialState: UserState = {
    entities: {},
    loaded: false,
    loading: false
};

/**
 * Declare reducer function
 * @param state of user
 * @param action of user
 */
export function reducer(
    state = initialState,
    action: fromUsers.UsersAction
): UserState {

    switch (action.type) {
        case fromUsers.LOAD_USERS: {
            return {
                ...state,
                loading: true,
            };
        }
        case fromUsers.LOAD_USERS_SUCCESS: {
            const users = action.payload;

            /**
             * Reduce array to make an entity with id: key
             */
            const entities = users.reduce((ent: { [id: string]: IUser }, user: IUser) => {
                return {
                    ...ent,
                    [user.id.value]: user
                };
            },
            {
                ...state.entities
            }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }
        case fromUsers.LOAD_USERS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

    }

    return state;
}

// Selectors

/**
 * Selector for user loading state
 * @param state of user
 */
export const getUsersLoading = (state: UserState) => state.loading;

/**
 * Selector for user loaded state
 * @param state of user
 */
export const getUsersLoaded = (state: UserState) => state.loaded;

/**
 * Selector for user loading state
 * @param state of user
 */
export const getUsersEntities = (state: UserState) => state.entities;
