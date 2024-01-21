export interface Usuario {
  id?: number;
  nombre?: string;
  correo: string;
  contrasena: string;
}

export interface Hotel {
  id?: number;
  nombre: string;
  direccion: string;
}

export interface Habitacion {
  id?: number;
  numero: number;
  tipo: string;
  precio: number;
  hotel_id: number;
}

export interface Reserva {
  id?: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  usuario_id: number;
  habitacion_id: number;
}
