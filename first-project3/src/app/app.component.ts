import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { UstawieniaComponent } from './ustawienia/ustawienia.component';
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, UstawieniaComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {

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

  
}