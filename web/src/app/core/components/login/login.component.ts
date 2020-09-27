import { Component, OnInit } from '@angular/core'
import { HelperService } from 'src/app/shared/services/helper.service'
import { AuthService } from './../../Services/auth.service'
import { RestService } from 'src/app/shared/services/rest.service'
import { CONSTANTS } from 'src/app/config/app.constants'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new FormControl('')
  pass = new FormControl('')
  msg: string = ''

  constructor(
    private _auth: AuthService,
    private _hs: HelperService,
    private _rest: RestService
  ) { }

  ngOnInit() {
    
    // for updating client data, make bid=1 for updating own data
    // let data = {
    //   'bname': 'Texmaco Pvt Ltd',
    //   'bphone': '89818181818',
    //   'bgst': '12321323213',
    //   'baddress': '22 Baker Street',
    //   'bpan': 'DSEPS1919B',
    //   'bstate': 12,
    //   'bcity': 'Kolkata',
    //   'bpin': '700122',
    //   'bid': '2'
    // }
    // this._rest.updateClientData(data).subscribe((res: any) => {
    //   console.log(res)
    // })

    // to update bank details, make bid=1 for updating own data
    // let data1 = {
    //   'bid': '2',
    //   'bankName': 'KOTAK',
    //   'bankAddress': 'Park Street',
    //   'accNo': '321323123213213',
    //   'ifsc': 'KKBK2132132',
    //   'accType': '1',
    //   'upi': 'kotak@kotak'
    // }
    // this._rest.updateClientBank(data1).subscribe((res: any) => {
    //   console.log(res)
    // })

    // this is to add new client, remember phone,gst,pan cannot be duplicate
    // let data = {
    //   'bname': 'Tunir',
    //   'bphone': '89818981818',
    //   'bgst': '12321324213',
    //   'baddress': '22 Baker Street',
    //   'bpan': 'DSEPS1929B',
    //   'bstate': 12,
    //   'bcity': 'Kolkata',
    //   'bpin': '700122',
    //   'bid': '4'
    // }
    // this._rest.addClientData(data).subscribe((res: any) => {
    //   console.log(res)
    // })
  }

  resetWarning() {
    this.msg = ''
  }

  resetForm() {
    this.user.reset()
    this.pass.reset()
    this.msg = ''
  }

  logIn() {
    if (this.user.value !== '' && this.pass.value !== '') {
      let req = {
        user: this.user.value,
        pass: this.pass.value
      }
      this._rest.login(req).subscribe((res) => {
        if (res.status === 'success') {
          this._auth.isLoggedIn = true
          this._hs.goTo(CONSTANTS.HOME_URL)
        } else {
          this._auth.isLoggedIn = false
          this.msg = res.message
        }
      })
    } else {
      this.msg = CONSTANTS.EMPTY_FIELDS
    }
  }

}
