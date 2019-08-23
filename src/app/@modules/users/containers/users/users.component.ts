import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import { IUser } from '../../../../@core/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  public users$: Observable<IUser[]>;

  constructor(private store: Store<fromStore.UsersState>) { }

  ngOnInit() {
    /**
     * Subscribe to state
     */
    this.users$ = this.store.select(fromStore.getAllUsers);

    /**
     * Dispatch action
     */
    this.store.dispatch(new fromStore.LoadUsers());
  }

}
