import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {

  form: FormGroup;
username: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
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
}