import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CrisisRoutingModule } from './crises-center-routing.module';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { CrisisDetailsComponent } from './crisis-details/crisis-details.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

@NgModule({
  declarations: [CrisesListComponent, CrisisDetailsComponent, CrisisCenterHomeComponent],
  imports: [CommonModule, CrisisRoutingModule, FormsModule],
})
export class CrisisCenterModule {}
