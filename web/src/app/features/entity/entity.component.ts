import { RestService } from 'src/app/shared/services/rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray } from '@angular/forms';
import { STATE_LIST, BANK_TYPES } from 'src/app/config/app.constants';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {

  // My Data form variables
  name = ''
  phone = ''
  gstin = ''
  pan = ''
  address = ''
  state = ''
  city = ''
  pin = ''
  selectedStateValue = ''

  // My Bank Details
  bname = ''
  baddress = ''
  accno = ''
  caccno = '' // Use this to validate accNo before hitting API
  ifsc = ''
  selectedAccType = "0"
  upi = ''
  termArray = ['Fetch terms from API', 'Either store them in a array on frontend', 'Or send data as an array from backend']

  editBank = false
  editDetails = false
  editTerms = false
  error = ''

  accTypes = BANK_TYPES;
  states = STATE_LIST;
  clientList = []
  cid = ''

  // Necessary to define right after class export, don't know why.
  termForm = this._fb.group({
    terms: this._fb.array([
      this._fb.control('')
    ])
  });
  // Returns terms to Form
  get terms() {
    return this.termForm.get('terms') as FormArray;
  }
  // Method to create new feilds
  addTerm() {
    this.terms.push(this._fb.control(''));
  }
  // Hits when UPDATE button gets clicked.
  onTermSubmit() {
    // Post this.terms.value to the TERM_API
    if (!this.editTerms) {
      console.log(this.terms.value);
    }
  }
  // Delete a term
  deleteTerm(e) {
    this.terms.removeAt(e)
  }

  view = 'client'

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _rest: RestService
  ) { }

  ngOnInit() {
    this.view = this._route.snapshot.params.id === 'self' ? 'self' : 'client'
    if (this.view == 'client') {
      this.getClientList()
    } else {
      this.getBusinessData(1)
    }
    this.getTermsData()
  }

  getTermsData() {
    // Delete 0th index which is created by default while rendering
    // this.deleteTerm(0)
    this.terms.clear()
    // Pushing each data of fetched array- to the terms array as a control for FormArray
    this.termArray.forEach(x => {
      this.terms.push(this._fb.control(x))
    })
  }
  getClientList() {
    this.clientList = []
    // ClientList REST call and populating
    this._rest.clientList().subscribe((res) => {
      res && res.data.map(x => {
        this.clientList.push(x)
      })
    })
  }

  getBusinessData(id: number) {
    let _rest = this.view == 'self' ? this._rest.myData() : this._rest.clientData(id)
    // My data REST call and populating
    _rest.subscribe((res) => {
      let result = res.data[0]
      this.name = result.name
      this.phone = result.phone
      this.gstin = result.gstin
      this.pan = result.pan
      this.address = result.address
      this.city = result.city
      this.pin = result.pin
      this.selectedStateValue = result.state
      this.bname = result.bankName
      this.baddress = result.bankAdd
      this.accno = result.accountNo
      this.ifsc = result.ifsc
      this.selectedAccType = result.accountType
      this.upi = result.upi
    })
  }

  clearForm() {
    this.name = ''
    this.phone = ''
    this.gstin = ''
    this.pan = ''
    this.address = ''
    this.state = ''
    this.city = ''
    this.pin = ''
    this.selectedStateValue = '0'
  }

  edit(e) {
    // get the clicked client id and call  this.getBusinessData(id)
    this._rest.clientData(e).subscribe((res) => {
      let result = res.data[0]
      this.name = result.name
      this.phone = result.phone
      this.gstin = result.gstin
      this.pan = result.pan
      this.address = result.address
      this.city = result.city
      this.pin = result.pin
      this.selectedStateValue = result.state,
        this.cid = e
    })


  }

  updateSelf() {
    if (!this.editDetails) {
      let data = {
        'bname': this.name,
        'bphone': this.phone,
        'bgst': this.gstin,
        'baddress': this.address,
        'bpan': this.pan,
        'bstate': this.selectedStateValue,
        'bcity': this.city,
        'bpin': this.pin,
        'bid': '1'
      }
      this._rest.updateClientData(data).subscribe((res: any) => {
        if (res.status == 'success') {
          this.getBusinessData(1)
        }
      })

    }

  }

  updateClient() {
    let data = {
      'bname': this.name,
      'bphone': this.phone,
      'bgst': this.gstin,
      'baddress': this.address,
      'bpan': this.pan,
      'bstate': this.selectedStateValue,
      'bcity': this.city,
      'bpin': this.pin,
      'bid': this.cid
    }
    this._rest.updateClientData(data).subscribe((res: any) => {
      if (res.status == 'success') {
        this.getClientList()
      }
    })
    this.clearForm()
  }

  addClient() {
    let data = {
      'bname': this.name,
      'bphone': this.phone,
      'bgst': this.gstin,
      'baddress': this.address,
      'bpan': this.pan,
      'bstate': this.selectedStateValue,
      'bcity': this.city,
      'bpin': this.pin,
      'bid': '4'
    }
    this._rest.addClientData(data).subscribe((res: any) => {
      console.log(res)
    })
  }

  delete(e) {
    // Bind to a REST API to delete client permanently from the db
    this.clientList.splice(e, 1)
  }
  updateBank() {
    if (!this.editBank) {
      if (this.accno == this.caccno) {
        let data = {
          'bid': 1,
          'bankName': this.bname,
          'bankAddress': this.baddress,
          'accNo': this.accno,
          'ifsc': this.ifsc,
          'accType': this.selectedAccType,
          'upi': this.upi
        }
        this._rest.updateClientBank(data).subscribe((res: any) => {
          this.error = ''
        })
      } else {
        this.getBusinessData(1)
        this.editBank = true
        this.error = 'Account number does not match!'
      }
    }
  }
}
