import { Injectable } from '@angular/core';
import { RestService } from 'src/app/shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _rest: RestService
  ) { }

  isLoggedIn: boolean = false;

}