import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
// server simulation
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// modules
import { HeroesModule } from './heroes/heroes.module';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { AuthModule } from './auth/auth.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CrisisCenterComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    // server simulation
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router:Router){
    const replacer = (key:any, value:any) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
