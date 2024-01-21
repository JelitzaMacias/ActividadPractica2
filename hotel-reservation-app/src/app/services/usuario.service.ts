import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../dto/datos';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  login(datos: Usuario) {
    return this.http.post(this.apiUrl + 'login', datos);
  }

  register(datos: Usuario) {
    return this.http.post(this.apiUrl + 'usuario', datos);
  }

  getUsuarios() {
    return this.http.get(this.apiUrl + 'usuario');
  }
}
