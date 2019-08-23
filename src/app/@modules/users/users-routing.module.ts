import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Container components
import * as fromContainers from './containers';

const routes: Routes = [
    { path: '', component: fromContainers.UsersComponent },
    { path: ':userId', component: fromContainers.UserItemComponent },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class UsersRoutingModule { }
