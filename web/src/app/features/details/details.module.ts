import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DetailsComponent } from './details.component'
import { DetailsRoutingModule } from './details-routing.module'
import { DpDatePickerModule } from 'ng2-date-picker';
import { GstComponent } from './components/gst/gst.component';
import { NgstComponent } from './components/ngst/ngst.component'
@NgModule({
  declarations: [
    DetailsComponent,
    GstComponent,
    NgstComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DetailsRoutingModule,
    DpDatePickerModule
  ]
})
export class DetailsModule { }
