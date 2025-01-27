import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { WordType } from '../../data/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {

  word: WordType = null as any;

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {  
    this.fetchWord();
  }

  addTonouns(word: WordType): void{
    this.wordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType){
    this.wordsService.addVerb(word);
    this.fetchWord();
  }

  check(): void{
    this.wordsService.check();
  }

  private fetchWord(): void {
    this.word = this.wordsService.getWords().shift() as WordType;
  }

}
