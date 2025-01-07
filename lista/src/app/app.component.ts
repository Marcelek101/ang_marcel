import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  title = 'Lista zadan';
  config = {
    title: 'Lista zadan',
    date: new Date(),
  };
  footer = '© Lista zadań';
}