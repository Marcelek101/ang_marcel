import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  public data: any;
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.fetchDetails();
  }

  public fetchDetails(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      (resp:any) => {
        console.log(resp);
        this.data = resp;
      }
    )
  }
}