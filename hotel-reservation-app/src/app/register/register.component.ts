// register.component.ts
import { Component } from '@angular/core';
import { Usuario } from '../dto/datos';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  usuario: Usuario = {
    nombre: '',
    correo: '',
    contrasena: '',
  };
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login(): void {
    this.usuarioService.register(this.usuario).subscribe(
      (data) => {
        this.router.navigate(['/hotel']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
