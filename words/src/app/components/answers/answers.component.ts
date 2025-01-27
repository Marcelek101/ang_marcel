import { Component, OnInit, Input } from '@angular/core';
import { WordType } from '../../data/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answers',
  imports: [CommonModule],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.css'
})
export class AnswersComponent  implements OnInit{

  @Input() title!: string;
  words: WordType[] = [];

  @Input() set word(word: WordType) {
    if (word) {
      this.words.push(word);
    }
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
