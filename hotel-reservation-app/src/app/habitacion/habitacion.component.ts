import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Habitacion, Hotel, Reserva } from '../dto/datos';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habitacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css',
})
export class HabitacionComponent implements OnInit {
  habitaciones: Habitacion[] = [];
  reservas: Reserva[] = [];
  opcionSeleccionada: number | undefined;
  hoteles: Hotel[] = [];
  habitacion: Habitacion = {
    numero: 0,
    hotel_id: 0,
    tipo: '',
    precio: 200,
  };

  ngOnInit(): void {
    this.hotelService.getHabitaciones().subscribe((data: any) => {
      console.log(data);

      this.habitaciones = data.data;
    });
    this.hotelService.getHoteles().subscribe((data: any) => {
      console.log(data);

      this.hoteles = data.data;
    });
  }

  constructor(private hotelService: HotelService, private router: Router) {}
  agregarHabitacion() {
    this.hotelService.postHabitacion(this.habitacion).subscribe((data: any) => {
      this.habitacion = {
        numero: 0,
        hotel_id: 0,
        tipo: '',
        precio: 200,
      };
      window.location.reload();
    });
  }

  seleccionarOpcion(): void {
    console.log('Opción seleccionada:', this.opcionSeleccionada);
  }

  eliminarHabitacion(id: any) {
    this.hotelService.deleteHabitacion(id).subscribe((data: any) => {
      window.location.reload();
    });
  }
}
