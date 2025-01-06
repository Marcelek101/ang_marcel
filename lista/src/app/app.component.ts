import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  title = 'Lista Zadań';

  get footer(): string { 
    return '© Lista zadań,All rights reserved.';
  }

  getDate(): Date {
    return new Date();
  }
}