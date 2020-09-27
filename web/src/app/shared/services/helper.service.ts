import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private _router: Router
  ) { }

  goTo(key) {
    this._router.navigateByUrl(key)
  }

  getUrl(urlObj: any): any {
    const _url: string = urlObj.isExcluded ? 'assets/data' + urlObj.mock : (urlObj.nonAPIBaseUrl ? urlObj.rest : environment.restBaseUrl + urlObj.rest);
    return (urlObj.params) ? _url.replace(/\{0}/, urlObj.params[0]).replace(/\{1}/, urlObj.params[1]).replace(/\{2}/, urlObj.params[2]) : _url;
  }
}
