import { Component, OnInit } from '@angular/core';
// interfaces
import { Crisis } from '../crisis';
// routing
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// services
import { CrisisService } from '../crisis.service';
// rxjs
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { CanComponentDeactivate } from 'src/app/can-deactivate.guard';

@Component({
  selector: 'app-hero-details',
  templateUrl: './crisis-details.component.html',
  styleUrls: ['./crisis-details.component.scss'],
  animations: [],
})
export class CrisisDetailsComponent implements OnInit, CanComponentDeactivate {
  crisis: Crisis | undefined = undefined;
  test: string | null = '0';
  editName = this.crisis?.name;
  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private router: Router,
    private dialogService: DialogService
  ) {}
  ngOnInit() {
   this.route.data.subscribe(data=>{
    this.editName = data['crisis'].name
    this.crisis = data['crisis']
   })
  }

  goToCrises(crisis: Crisis | undefined) {
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
  }

  save() {
    if (this.crisis) {
      this.crisis.name = this.editName!
      this.crisisService.updateCrisis(this.crisis).subscribe(res=>console.log(res));

      this.goToCrises(this.crisis);
    }
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }
}
