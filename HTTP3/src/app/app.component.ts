import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworksComponent } from './artworks/artworks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ArtworksComponent],
  template: `
    <h1>Welcome to Art Gallery</h1>
    <app-artworks></app-artworks>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
