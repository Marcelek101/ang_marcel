import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  imports: [CommonModule, HttpClientModule,],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit {

  public pageNumber = 1
  public data: any;
artworksData: any;
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.loadPage(this.pageNumber);
  }

  loadPage(pageNumber: number): void{
    const url = `https://api.artic.edu/api/v1/artworks/search?q=cats&page=${pageNumber}`
    this.http.get(url).subscribe(
      (resp:any) => {
        this.data = resp;
      }
    )
  }

  loadNextPage() {
    this.pageNumber++;
    this.loadPage(this.pageNumber);
  }

  loadPreviousPage() {
    this.pageNumber--;
    this.loadPage(this.pageNumber);
  }
}
