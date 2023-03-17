import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { canDeactivateGuard } from '../can-deactivate.guard';
import { crisisDetailResolver } from './crisis-detail-resolver';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisesListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailsComponent,
            canDeactivate:[canDeactivateGuard],
            resolve:{
              crisis:crisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisRoutingModule { }
