import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/database';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { RankingComponent } from "./ranking/ranking.component";


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, NavbarComponent, RankingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = { author: '', sentence: '', votes: 0 };

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
}
