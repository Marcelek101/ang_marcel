import { Injectable } from '@angular/core';
import { WordType } from '../data/models';
import { WORDS } from '../data/data-base';
import { Type } from '../data/models';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words: WordType[] =[];
  private nound: WordType[]= [];
  private verbs: WordType[]= [];

  constructor() { 
    this.words = WORDS;
  }

  getWords(): WordType[]{
    return this.words;
  }
  getNouns(): WordType[]{
    return this.nound;
  }
  getVerbs(): WordType[]{
    return this.verbs;
  }

  addNoun(value: WordType): void {
    this.nound.push(value);
  }
  addVerb(value: WordType): void {
    this.verbs.push(value);
  }

  check(){
    this.nound.map(word => (word.correct = word.type === Type.NOUN));
    this.verbs.map(word => (word.correct = word.type === Type.VERB));
  }

}
