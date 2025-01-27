import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Person } from '../services/data-base.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  imports: [FormsModule, CommonModule,],
})
export class LeftComponent implements OnInit, OnDestroy {
  persons: Person[] | undefined;
  subscriptions: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const sub = this.dataService.behaviorSubject.subscribe(
      (data: Person[]) => {
        this.persons = data;
        console.log('LeftComponent  Subscription ')
      },
      error => console.error(error),
      () => console.log('LeftComponent complete?')
      
    )
    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}