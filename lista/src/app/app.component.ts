import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from './task';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadamie codzienne: odkurzanie';
  taskDate ='';
  config: { [key: string]: string } | null  = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: true,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString(),
      };
    }, 500);
    this.sortTasks();
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
  };
  this.tasks.push(task);
  this.taskName = '';
  this.taskDate = '';
  this.sortTasks();
 }

 switchEditMode(){
  this.editMode = !this.editMode;
 }

 markTaskAsDone(task: Task){
  task.done = true;
  this.sortTasks();
 }

 deleteTask(task: Task) {
  this.tasks = this.tasks.filter(e => e !== task );
 }

 private sortTasks(){
  this.tasks = this.tasks.sort((a: Task, b: Task) =>
    a.done === b.done ? 0 : a.done ? 1 : -1
  );
 }
}