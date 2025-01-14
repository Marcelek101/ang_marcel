import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ZdjeciaComponent } from './zdjecia/zdjecia.component';
import { UstawieniaComponent } from './ustawienia/ustawienia.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ścieżka domyślna
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'zdjecia', component: ZdjeciaComponent },
  { path: 'ustawienia', component: UstawieniaComponent },

];
