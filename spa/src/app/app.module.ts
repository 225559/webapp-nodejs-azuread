import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { config } from './app-config';
import { MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot({
      auth: {
        clientId: config.auth.clientId,
        authority: 'https://login.microsoftonline.com/' + config.auth.tenant,
        redirectUri: config.auth.redirectUri,
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false,
      },
    },
    {
      popUp: false,
      consentScopes: [],
      unprotectedResources: [],
      protectedResourceMap: [],
      extraQueryParameters: {},
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
