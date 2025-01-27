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

  public data: any;
artworksData: any;
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.fetchDetails();
  }

  public fetchDetails(){
    this.http.get('	https://api.artic.edu/api/v1/artworks/search?q=cats').subscribe(
      (resp:any) => {
        console.log(resp);
        this.data = resp;
      }
    )
  }
}