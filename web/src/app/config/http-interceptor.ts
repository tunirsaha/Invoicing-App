import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HelperService } from '../shared/services/helper.service';


@Injectable()
export class httpInterceptor implements HttpInterceptor {
    constructor(private _hs: HelperService) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ):
        Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(res => {
                // this._hs.startLoader();
                if (res) {
                    // setTimeout(() => {
                    // this._hs.stopLoader();
                    // }, 100);
                    if (res instanceof HttpResponse) {
                    } else if (res instanceof HttpErrorResponse) {
                    }
                }
            })
        );
    }
}