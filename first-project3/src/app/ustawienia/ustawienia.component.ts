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

  selectedLanguage = 'pl'; // Domyślny język
  

  languages = [
    { code: 'pl', label: 'Polski' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ];

  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedLanguage = target.value;
  
    if (selectedLanguage) {
      this.selectedLanguage = selectedLanguage;
      console.log('Wybrany język:', selectedLanguage);
    }
  }
}
