import { Injectable } from '@angular/core';

import { map, switchMap, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as userActions from '../actions/user.action';
import { UserService } from '../../../../@core/services/user.service';

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions, private userService: UserService) { }

    /**
     * Effect to communicate to service and bring data
     * Responds to conditional action
     */
    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(userActions.LOAD_USERS),
        switchMap(() => this.userService.getUsers()
            .pipe(
                map(users => new userActions.LoadUsersSucess(users.results)),
                catchError(error => of(new userActions.LoadUsersFail(error)))
            ))
    );
}
