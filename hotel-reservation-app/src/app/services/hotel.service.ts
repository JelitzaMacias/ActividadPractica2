import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habitacion, Hotel, Reserva } from '../dto/datos';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private apiUrl = 'http://localhost:3000/hotel';
  private apiUrl1 = 'http://localhost:3000/habitacion';
  private apiUrl2 = 'http://localhost:3000/reserva';

  constructor(private http: HttpClient) {}

  getHoteles() {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  postHotel(hotel: Hotel) {
    return this.http.post(this.apiUrl, hotel);
  }

  deleteHotel(id: any) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  getHabitaciones() {
    return this.http.get<Habitacion[]>(this.apiUrl1);
  }

  postHabitacion(habitacion: Habitacion) {
    return this.http.post(this.apiUrl1, habitacion);
  }

  deleteHabitacion(id: any) {
    return this.http.delete(this.apiUrl1 + '/' + id);
  }

  getReservaciones() {
    return this.http.get<Reserva[]>(this.apiUrl2);
  }

  postReserva(reserva: Reserva) {
    return this.http.post(this.apiUrl2, reserva);
  }

  deleteReserva(id: any) {
    return this.http.delete(this.apiUrl2 + '/' + id);
  }
}
