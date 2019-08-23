import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IResponse } from '../models/response.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<IResponse> {
        return this.http
            .get<IResponse>(`https://randomuser.me/api/?nat=us&results=4`)
            // tslint:disable-next-line: deprecation
            .pipe(catchError(error => Observable.throw(error.json())));
    }
}
