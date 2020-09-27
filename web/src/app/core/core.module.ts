import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './components/login/login.component'
import { CoreRoutingModule } from './core-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { httpInterceptor } from '../config/http-interceptor'
import { RestService } from '../shared/services/rest.service'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ],
  providers: [
    RestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: httpInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
