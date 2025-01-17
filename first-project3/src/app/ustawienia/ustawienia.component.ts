import { Component, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ustawienia',
  imports: [CommonModule, FormsModule,],
  templateUrl: './ustawienia.component.html',
  styleUrl: './ustawienia.component.css'
})
export class UstawieniaComponent {
  @Input() username: any;

  

  ngOnInit() {}

  reloadPage(): void {
    window.location.reload();
  }

}
