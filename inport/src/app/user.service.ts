import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usernameSource = new BehaviorSubject<string>('Default User');
  currentUsername = this.usernameSource.asObservable();

  changeUsername(username: string) {
    this.usernameSource.next(username);
  }
}