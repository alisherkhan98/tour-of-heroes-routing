import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canMatch: [AuthGuard],
  },
  {
    path: 'crisis-center',
    data: { preload: true },
    loadChildren: () =>
      import('./crisis-center/crisis-center.module').then(
        (m) => m.CrisisCenterModule
      ),
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup',
    data: { animation: 'popup' },
  },
  { path: '', redirectTo: 'superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategyService }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
