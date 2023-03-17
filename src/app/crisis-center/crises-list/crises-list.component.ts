// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
// interfaces
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
// rxjs
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-crises-list',
  templateUrl: './crises-list.component.html',
  styleUrls: ['./crises-list.component.scss'],
})
export class CrisesListComponent {
  crises: Crisis[] = [];
  crises$!: Observable<Crisis[]>;
  selectedId = 0;

  constructor(
    private crisisService: CrisisService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getCrises();
  }

  getCrises() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.crisisService.getCrises();
      })
    );
    this.crises$.subscribe(res=>{
      this.crises = res
    })
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.crisisService.addCrisis({ name } as Crisis).subscribe((crisis) => {
      this.crises.push(crisis);
    });
  }

  delete(crisis: Crisis): void {

    this.crisisService
      .deleteCrisis(crisis.id)
      .subscribe(()=>{
        this.crises = this.crises.filter(c=>c.id!=crisis.id)
      });
  }
}
