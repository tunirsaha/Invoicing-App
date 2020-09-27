import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from './layout.component'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'mydetails',
                redirectTo: 'entity/self'
            },
            {
                path: 'details',
                loadChildren: () => import('../details/details.module').then(m => m.DetailsModule)
            },
            {
                path: 'entity',
                loadChildren: () => import('../entity/entity.module').then(m => m.EntityModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
