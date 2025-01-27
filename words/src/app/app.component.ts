import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from "./components/question/question.component";
import { AnswersComponent } from "./components/answers/answers.component";
import { WordsService } from './services/words.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, QuestionComponent, AnswersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {

  constructor(private wordsService: WordsService){
  }

  get nouns(){
    return this.wordsService.getNouns();
  }
  get verbs(){
    return this.wordsService.getVerbs();
  }
}