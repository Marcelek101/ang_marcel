import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../services/data-base.service';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  imports: [FormsModule, CommonModule,],
})
export class RightComponent implements OnInit {
  persons: Observable<Person[]> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.persons = this.dataService.subject.asObservable();
  }
}