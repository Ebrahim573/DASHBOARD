import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from './modules/list/list.component';
import { NotificationsComponent } from './modules/notifications/notifications.component';
import { SettingsComponent } from './modules/settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NotificationsComponent,
    SettingsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
