// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule si estás usando formularios template-driven

import { AppComponent } from './app.component.';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { RoomSearchComponent } from './app/room-search/room-search.component';
import { RoomSelectionComponent } from './app/room-selection/room-selection.component';
import { ReservationConfirmationComponent } from './app/reservation-confirmation/reservation-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RoomSearchComponent,
    RoomSelectionComponent,
    ReservationConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule si estás usando formularios template-driven
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'room-search', component: RoomSearchComponent },
      { path: 'room-selection', component: RoomSelectionComponent },
      { path: 'reservation-confirmation', component: ReservationConfirmationComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
