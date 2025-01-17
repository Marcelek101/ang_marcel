import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zdjecia2',
  imports: [CommonModule, FormsModule],
  templateUrl: './zdjecia2.component.html',
  styleUrl: './zdjecia2.component.css'
})
export class Zdjecia2Component {

  images: string[] = [
   
     '11.jpg',
     '12.jpg',
     '13.jpg',
     '14.jpg',
     '15.jpg',
     '16.jpg',
     '17.jpg',
     '18.jpeg',
     '19.jpg',
     '20.jpg',
     '21.jpg',
     '22.jpg',
     '23.jpeg',
     '24.jpeg',
     '25.jpeg',
     '26.png',
     '27.jpg',
     
  ];
  currentIndex: number = 0;

  onSlideChange(): void {
    console.log(`Obecny indeks: ${this.currentIndex}`);
  }

}
