import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RightComponent } from "./right/right.component";
import { LeftComponent } from "./left/left.component";
import { Person } from './services/data-base.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, RightComponent, LeftComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  hidden = true;
  person: Person = { firstName: '', lastName: '' };
  constructor(private dataService: DataService) {}

  add(): void {
    this.dataService.addPerson(this.person)

  }

}