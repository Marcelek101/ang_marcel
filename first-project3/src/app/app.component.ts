import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {

  
  ot: boolean = false;
  wiecej_czy_mniej: boolean = false;
  mniej_czy_wiecej: boolean = true;
  wie(): void {
    {
      this.ot = true;
      this.wiecej_czy_mniej = true;
      this.mniej_czy_wiecej = false;
    }
  }

  mni(): void{
    {
      this.ot =false;
      this.wiecej_czy_mniej = false;
      this.mniej_czy_wiecej = true;
    }
  }





}