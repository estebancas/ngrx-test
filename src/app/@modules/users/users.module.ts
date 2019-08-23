import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { UsersRoutingModule } from './users-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

// Components
export const BASIC_COMPONENTS = [
  fromComponents.UserDetailComponent,
  fromComponents.UserFormComponent
];

// Containers
export const CONTAINER_COMPONENTS = [
  fromContainers.UsersComponent,
  fromContainers.UserItemComponent
];

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    ...CONTAINER_COMPONENTS,
    ...BASIC_COMPONENTS,
  ]
})

export class UsersModule { }
