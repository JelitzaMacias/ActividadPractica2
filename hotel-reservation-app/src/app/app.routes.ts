// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HotelComponent } from './hotel/hotel.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'habitacion', component: HabitacionComponent },
  { path: 'reservaciones', component: ReservacionesComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
