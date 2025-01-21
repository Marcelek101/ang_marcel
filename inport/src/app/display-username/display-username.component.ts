import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display-username',
  template: `
    <h2>Current Username</h2>
    <p>{{ username }}</p>
  `
})
export class DisplayUsernameComponent implements OnInit {
  username: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.currentUsername.subscribe(username => {
      this.username = username;
    });
  }
}