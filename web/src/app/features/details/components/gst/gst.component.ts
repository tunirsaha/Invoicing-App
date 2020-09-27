import { Component, OnInit } from '@angular/core';
import { NumToWordService } from 'src/app/shared/services/num-to-word.service';

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.scss']
})
export class GstComponent implements OnInit {

  name = ''
  hsn = ''
  gst = 18
  quantity = 1
  rate = 1
  tamount = 0
  igst = 0.18
  total = 1
  discount = 0
  isDiscount: boolean = false

  tam = 0
  tigst = 0
  tTotal = 0

  itemForm = []

  WordAmnt = ''

  constructor(private _num: NumToWordService) { }

  ngOnInit() {
  }

  add() {
    let data = {
      name: this.name,
      hsn: this.hsn,
      gst: this.gst,
      quantity: this.quantity,
      rate: this.rate,
      tamount: this.tamount,
      igst: this.igst,
      total: this.total,
      discount: this.discount
    }
    this.itemForm.push(data)
    this.totalCalcArray()
    this.clearForm()
  }

  clearForm() {
    this.name = ''
    this.hsn = ''
    this.gst = 18
    this.quantity = 1
    this.rate = 1
    this.tamount = 0
    this.igst = 0.18
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
    this.tamount = ( this.rate * this.quantity ) - e
    this.gstUpdate()
    this.total = this.tamount + this.igst
    this.totalCalc()
  }

  quantityUpdate(e: number){
    this.tamount = this.rate * e - this.discount
    this.gstUpdate()
    this.total = this.tamount + this.igst
    this.totalCalc()
  }

  rateUpdate(e: number){
    this.tamount = this.quantity * e - this.discount
    this.gstUpdate()
    this.total = this.tamount + this.igst
    this.totalCalc()
  }

  gstUpdate(){
    this.igst = this.tamount * ( this.gst / 100 )
    this.totalCalc()
  }

  totalCalc(){
    this.tam = this.itemForm.reduce( (a , i) => a + i.tamount , 0)
    this.tigst = this.itemForm.reduce( ( a, i) => a + i.igst, 0)
    this.tam += this.tamount
    this.tigst += this.igst
    this.tigst = parseFloat(this.tigst.toFixed(2))
    this.tTotal = this.itemForm.reduce( (a, i) => a + i.total, 0)
    this.tTotal = parseFloat(this.tTotal.toFixed(2))
  }

  totalCalcArray(){
    this.tam = this.itemForm.reduce( (a , i) => a + i.tamount , 0)
    this.tigst = this.itemForm.reduce( ( a, i) => a + i.igst, 0)
    this.tigst = parseFloat(this.tigst.toFixed(2))
    this.tTotal = this.itemForm.reduce( (a, i) => a + i.total, 0)
    this.tTotal = parseFloat(this.tTotal.toFixed(2))
    const beforeDot = this.tTotal.toString().split('.')
    const afterDot = beforeDot.pop()
    this.WordAmnt = this._num.numToWord(beforeDot) + ' And ' + this._num.numToPaise(afterDot) + ' Only'
  }
}
