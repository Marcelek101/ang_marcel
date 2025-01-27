import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataDisplayComponent } from './data-display/data-display.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule, DataDisplayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
}