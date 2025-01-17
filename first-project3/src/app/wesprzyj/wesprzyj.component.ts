import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wesprzyj',
  imports: [CommonModule, FormsModule,],
  templateUrl: './wesprzyj.component.html',
  styleUrl: './wesprzyj.component.css'
})
export class WesprzyjComponent {

  total: number = 0; 
  newAmount: number | null = null; // Kwota wpisana przez użytkownika
  isMillionaire: boolean = false;

  addAmount(): void {
    
    if (this.newAmount !== null) {
      this.total += this.newAmount;

      
      if (this.newAmount >= 1_000_000) {
        this.isMillionaire = true;
      } 
      this.newAmount = null; // Czyścimy pole po dodaniu
    }
  }


  dziekuje(): void{
    {
      alert('Dziękuję')
    }
  }
}



