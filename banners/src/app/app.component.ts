import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import domtoimage from 'dom-to-image'; // Ensure this is installed
import { saveAs } from 'file-saver'; // Ensure this is installed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'banners';
  width = 600;
  height = 500;
  color1 = 'red';
  color2 = 'yellow';
  percentColor1 = 0;
  percentColor2 = 100;
  fontSize = 52;

  layout = {
    horizontal: false,
    horizontalRev: false,
    vertical: false,
    verticalRev: false,
  };

  colors = [
    'red',
    'purple',
    'blue', 
    'green',
    'yellow',
    'brown',
    'grey',
    'black',
  ];

  getBannerStyles() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentColor1}%, ${this.color2} ${this.percentColor2}%)`,
    };
  }

  setLayout(selectedLayout: keyof typeof this.layout) {
    Object.keys(this.layout).forEach(key => (this.layout[key as keyof typeof this.layout] = false));
    this.layout[selectedLayout] = true;
  }

  saveImage(element: HTMLDivElement) {
    domtoimage.toBlob(element).then((blob: Blob) => saveAs(blob, 'banner.png'));
  }
}