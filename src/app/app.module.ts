import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Store Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects/index';
import { appReducers } from './store/app.reducers';

// Routes
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(EffectsArray)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
