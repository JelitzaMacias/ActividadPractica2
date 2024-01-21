import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hotel } from '../dto/datos';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
})
export class HotelComponent implements OnInit {
  hoteles: Hotel[] = [];
  hotel: Hotel = {
    direccion: '',
    nombre: '',
  };

  ngOnInit(): void {
    this.hotelService.getHoteles().subscribe((data: any) => {
      console.log(data);

      this.hoteles = data.data;
    });
  }

  constructor(private hotelService: HotelService, private router: Router) {}
  agregarHotel() {
    this.hotelService.postHotel(this.hotel).subscribe((data: any) => {
      this.hotel = {
        direccion: '',
        nombre: '',
      };
      window.location.reload();
    });
  }

  eliminarHotel(id: any) {
    this.hotelService.deleteHotel(id).subscribe((data: any) => {
      window.location.reload();
    });
  }
}
