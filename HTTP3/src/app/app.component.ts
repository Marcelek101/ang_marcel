import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworksComponent } from './artworks/artworks.component';
import {DataDisplayComponent} from './data-display/data-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ArtworksComponent, DataDisplayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
