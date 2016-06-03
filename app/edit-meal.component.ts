import { Component, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import * as moment from 'moment';



@Component({
  selector: 'edit-meal',
  inputs: ['currentMeal'],
  outputs: ['unselect'],
  directives: [DATEPICKER_DIRECTIVES],
  template: `
  <h2 (click)="changeSelection()"> Edit Meal </h2>
    <form class="editor">
      <label>Name</label>
      <input type="text" [(ngModel)]="currentMeal.mealName">
      <label>Details</label>
      <input type="text" [(ngModel)]="currentMeal.details">
      <label>Calories</label>
      <input type="text" [(ngModel)]="currentMeal.calories">
      <div class="calendar">
        <label>Time Eaten</label>
        <input type="time"  #hour value="10" placholder="10">
        <datepicker #date [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
      </div>
    </form>
  `
})

export class EditMealComponent {
  currentMeal: Meal;
  unselect: EventEmitter<boolean> = new EventEmitter();
  changeSelection(){
    this.unselect.emit(true)
  }
}
