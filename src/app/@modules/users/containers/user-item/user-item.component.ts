import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

import { IUser } from '../../../../@core/models/user.model';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.sass']
})
export class UserItemComponent implements OnInit {

  public user$: Observable<IUser>;

  constructor(private store: Store<fromStore.UsersState>) { }

  ngOnInit() {
    /**
     * Call selector that choose user from route :id
     */
    this.user$ = this.store.select(fromStore.getSelectedUser);
  }

}
