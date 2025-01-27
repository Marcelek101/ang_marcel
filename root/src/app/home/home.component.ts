import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  inputText: string = '';
    
  onInputChange(): void {
    console.log('Wpisany tekst:', this.inputText);
  }


  currentNumber = 0;
    plus(): void {
      if (this.currentNumber < 10){
        this.currentNumber +=1;
      } else {
        alert('Mamy: 10')
      }
    }

    
    minus(): void {
      if (this.currentNumber > 0){
        this.currentNumber -=1;
      } else {
        alert('No i znowu 0')
      }
    }


    jest: boolean = false;
    po(): void {
      {
        this.jest = true;
      }
    }
    
    sc(): void{
      {
        this.jest = false;
      }
    }

  
}
