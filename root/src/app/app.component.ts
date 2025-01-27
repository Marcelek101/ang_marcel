import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { UstawieniaComponent } from './ustawienia/ustawienia.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, UstawieniaComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  animations: [
    trigger('moveElement', [
      state('start', style({
        transform: 'translateX(0)',
      })),
      state('end', style({
        transform: 'translateX(100px)',
      })),
      transition('start <=> end', [
        animate('0.5s ease-in-out'),
      ]),
    ]),
  ],
})
export class AppComponent {

  currentState = 'start';

  toggleAnimation() {
    this.currentState = this.currentState === 'start' ? 'end' : 'start';
  }

  eksportowanaZmienna = [ 'username'];

  form: FormGroup;
  username: any;
  password: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    });
  }


  

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  
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

  nap: boolean = false;
  zal: boolean = true;

  log(): void{
    {
      this.nap = true;
      this.zal = false;
    }
  }



  zdjwie: boolean = false;
  zdjmni: boolean = true

  wiezdj(): void{
    {
      this.zdjmni = false;
      this.zdjwie = true;
    }
  }

  mnizdj(): void{
    {
      this.zdjmni = true;
      this.zdjwie = false;
    }
  }

  borderColor: string = '#000000'; // Domyślny kolor obramowania
  
}