import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-username',
  template: `
    <h2>Change Username</h2>
    <input [(ngModel)]="newUsername" placeholder="Enter new username" />
    <button (click)="changeUsername()">Change Username</button>
  `
})
export class ChangeUsernameComponent {
  newUsername: string = '';

  constructor(private userService: UserService) {}

  changeUsername() {
    this.userService.changeUsername(this.newUsername);
  }
}
