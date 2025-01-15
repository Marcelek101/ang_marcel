import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ustawienia',
  imports: [CommonModule, FormsModule,],
  templateUrl: './ustawienia.component.html',
  styleUrl: './ustawienia.component.css'
})
export class UstawieniaComponent {

  isDarkTheme = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
}
