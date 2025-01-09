import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/database';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
  title = 'cytaty';
}
