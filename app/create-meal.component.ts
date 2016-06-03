import {Component, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';
import { DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import * as moment from 'moment';



@Component({
  selector: 'add-meal',
  outputs: ['newMeal'],
  directives: [DATEPICKER_DIRECTIVES],
  template: `
  <h1>Add New Meal</h1>
    <form class="add-meal">
      <label>Name</label>
      <input type="text" #name value="food" placholder="food">
      <label>Details</label>
      <input type="text"  #detail value="lots of it" placholder="lots of it">
      <label>Calorie</label>
      <input type="text"  #calorie value="10" placholder="10">

      <div class="calendar">
        <label>Time Eaten</label>
        <input type="time"  #hour  value="18:00">
        <datepicker #date (ngModel)="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
      </div>

      <button (click)="createMeal(name.value, detail.value, calorie.value, hour.value, date)">Add</button>
    </form>
  `
})

export class CreateMealComponent {
  newMeal: EventEmitter<Meal> = new EventEmitter();
  createMeal(name: string, detail: string, calorie: number, hour: string, date) {
    // console.log(date)
    if(date._activeDate === undefined){
      this.newMeal.emit(new Meal(name, detail, calorie, hour, date._now));
    } else {
      this.newMeal.emit(new Meal(name, detail, calorie, hour, date._activeDate));
    }
  }
}
