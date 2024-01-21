import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { Habitacion, Hotel, Reserva, Usuario } from '../dto/datos';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservaciones.component.html',
  styleUrl: './reservaciones.component.css',
})
export class ReservacionesComponent implements OnInit {
  habitaciones: Habitacion[] = [];
  opcionSeleccionada: number | undefined;
  usuarios: Usuario[] = [];
  reservas: Reserva[] = [];
  reserva: Reserva = {
    fecha_fin: new Date(),
    fecha_inicio: new Date(),
    habitacion_id: 0,
    usuario_id: 0,
  };

  ngOnInit(): void {
    this.hotelService.getReservaciones().subscribe((data: any) => {
      console.log(data);

      this.reservas = data.data;
    });
    this.hotelService.getHabitaciones().subscribe((data: any) => {
      console.log(data);

      this.habitaciones = data.data;
    });
    this.usuarioService.getUsuarios().subscribe((data: any) => {
      console.log(data);

      this.usuarios = data.data;
    });
  }

  constructor(
    private hotelService: HotelService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  agregarReserva() {
    this.hotelService.postReserva(this.reserva).subscribe((data: any) => {
      this.reserva = {
        fecha_fin: new Date(),
        fecha_inicio: new Date(),
        habitacion_id: 0,
        usuario_id: 0,
      };
      window.location.reload();
    });
  }

  eliminarReserva(id: any) {
    this.hotelService.deleteReserva(id).subscribe((data: any) => {
      window.location.reload();
    });
  }
}
