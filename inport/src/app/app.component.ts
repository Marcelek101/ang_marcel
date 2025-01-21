import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { ChangeUsernameComponent } from './change-username/change-username.component';
import { DisplayUsernameComponent } from './display-username/display-username.component';
import { UserService } from './user.service';


@Component({

  declarations: [
    AppComponent,
    ChangeUsernameComponent,
    DisplayUsernameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Dodaj ten moduł
  ],
  providers: [User Service],
  bootstrap: [AppComponent]


  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

}