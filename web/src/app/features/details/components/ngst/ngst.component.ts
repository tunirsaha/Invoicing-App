import { Component, OnInit } from '@angular/core';
import { NumToWordService } from 'src/app/shared/services/num-to-word.service';

@Component({
  selector: 'app-ngst',
  templateUrl: './ngst.component.html',
  styleUrls: ['./ngst.component.scss']
})
export class NgstComponent implements OnInit {

  name = ''
  quantity = 1
  rate = 1
  total = 1
  discount = 0

  isDiscount: boolean = false

  tTotal = 0

  itemForm = []

  WordAmnt = ''

  constructor(private _num:NumToWordService) { }

  ngOnInit() {
  }

  add() {
    const data = {
      name: this.name,
      quantity: this.quantity,
      rate: this.rate,
      total: this.total,
      discount: this.discount
    }
    this.itemForm.push(data)
    this.clearForm()
    this.totalCalcArray()
  }

  quantityUpdate(e: number){
    this.total = this.rate * e - this.discount
    this.totalCalc()
  }

  rateUpdate(e: number){
    this.total = this.quantity * e - this.discount
    this.totalCalc()
  }

  clearForm() {
    this.name = ''
    this.quantity = 1
    this.rate = 1
    this.total = 1
    this.discount = 0
  }

  deleteItem(e){
    this.itemForm.splice(e,1)
    this.totalCalc()
  }

  isDiscounted(){
    if(this.isDiscount){
      return true
    } else {
      return false
    }
  }

  addDiscount(){
    this.isDiscount = true
  }

  discountUpdate(e){
    this.total = ( this.rate * this.quantity ) - e
    this.totalCalc()
  }

  totalCalc(){
    this.tTotal = this.itemForm.reduce( (a, i) => a + i.total, 0)
    this.tTotal += this.total
    this.tTotal = parseFloat(this.tTotal.toFixed(2))
    this.WordAmnt = this._num.numToWord(this.tTotal)
  }

  totalCalcArray(){
    this.tTotal = this.itemForm.reduce( (a, i) => a + i.total, 0)
    this.tTotal = parseFloat(this.tTotal.toFixed(2))
    this.WordAmnt = this._num.numToWord(this.tTotal)
  }
}
