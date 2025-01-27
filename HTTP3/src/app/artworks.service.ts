import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworksService } from '../artworks.service';

@Component({
  selector: 'app-artworks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  artworksData: any;

  constructor(private artworksService: ArtworksService) {}

  ngOnInit(): void {
    this.artworksService.getArtworks().subscribe((data: any) => {
      this.artworksData = data;
    });
  }
}
