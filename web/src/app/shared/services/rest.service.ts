import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API } from '../../config/api.constants';
import { HelperService } from './helper.service';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(
        private _http: HttpClient,
        private _hs: HelperService
    ) { }

    private get(url, params) {
        return this._http.get(this._hs.getUrl(url), params)
            .pipe(
                tap(
                    data => {
                    },
                    error => {
                        console.error(error);
                    }
                )
            );
    }
    private post(url, data, params) {
        return this._http.post(this._hs.getUrl(url), JSON.stringify(data), params)
            .pipe(
                tap(
                    data => {
                    },
                    error => {
                        console.error(error);
                    }
                )
            );
    }

    clientList(): Observable<any> {
        return this.get(_.extend(API['clientList']), {})
    }
    login(data: any): Observable<any> {
        return this.post(_.extend(API['login']), data, {})
    }
    myData(): Observable<any> {
        return this.get(_.extend(API['myData']), {})
    }
    clientData(id: number): Observable<any> {
        return this.get(_.extend(API['clientData'], { params: id }), {})
    }
    updateClientData(data: any): Observable<any> {
        return this.post(_.extend(API['updateClientData']), data, {})
    }
    updateClientBank(data: any): Observable<any> {
        return this.post(_.extend(API['updateClientBank']), data, {})
    }
    addClientData(data: any): Observable<any> {
        return this.post(_.extend(API['addClientData']), data, {})
    }
}
