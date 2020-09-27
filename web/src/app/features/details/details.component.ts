import { RestService } from './../../shared/services/rest.service';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  gstSelected = false
  invoiceDate = ''
  dueDate = ''
  clientList = [{ bname: "Select Client", cid: "-1" }]
  selectedClient = '-1'

  // My Data form variables
  myname = ''
  mygstin = ''
  mypan = ''
  myaddress = ''

  // Client Data form variables
  cname = ''
  cgstin = ''
  cpan = ''
  caddress = ''

  constructor(private _rest: RestService) { }

  datePickerConfig = {
    drops: 'up',
    format: 'YY/M/D'
  }

  ngOnInit() {
    this._rest.clientList().subscribe((res) => {
      res.data.map(x => {
        this.clientList.push(x)
      })
      // My data REST call and populating
      this._rest.myData().subscribe((res) => {
        let result = res.data[0]
        this.myname = result.name
        this.mygstin = result.gstin
        this.mypan = result.pan
        this.myaddress = result.address
      })
    })
  }

  isClientSelected() {
    return this.selectedClient === '-1' ? false : true
  }

  clientChange(e) {
    let data = this.clientList.find( obj => obj.cid === e)
    this.cname = data['bname'] ? data['bname'] : "n/a"
    this.cgstin = data['gstin'] ? data['gstin'] : "n/a"
    this.cpan = data['pin'] ? data['pin'] : "n/a"
    this.caddress = data['address'] ? data['address'] : "n/a"
  }

  log(){
    console.log(this.gstSelected)
  }
}
