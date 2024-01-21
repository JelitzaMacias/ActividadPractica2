// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../dto/datos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: Usuario = {
    correo: '',
    contrasena: '',
  };
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login(): void {
    this.usuarioService.login(this.usuario).subscribe(
      (data) => {
        this.router.navigate(['/hotel']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
