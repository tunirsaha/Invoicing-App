import { Location } from "@angular/common"
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/core/Services/auth.service'
import { HelperService } from 'src/app/shared/services/helper.service'
import { CONSTANTS } from 'src/app/config/app.constants'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  tabbed = 'create'

  constructor(
    private _hs: HelperService,
    private _router: Router,
    private _loc: Location,
    private _auth: AuthService
  ) {
    _router.events.subscribe(val => {
      if (_loc.path() !== "") {
        this.tabbed = _loc.path().split('home/')[1]
        this.tabbed = (this.tabbed === 'entity/self') ? 'mydetails' : this.tabbed
      } else {
        this.tabbed = "create"
      }
    })
  }

  ngOnInit() {
  }

  loadRoute(key) {
    this.tabbed = key
    this._hs.goTo('home/' + key)
  }

  logOut() {
    this._auth.isLoggedIn = false
    this._hs.goTo(CONSTANTS.LOGIN_URL)
  }

}
