import { Component, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal',
  inputs: ['currentMeal'],
  outputs: ["deleteMeal", "editMeal"],
  template: `

    <div class="meal" style="display: inline-block" (click)="changeMeal(currentMeal)"> <span class="meal-name">Meal: {{currentMeal.mealName}} </span><br>
    <span class="details">Details: {{currentMeal.details}}</span><br>
    <span class="calories">Calories: {{currentMeal.calories}} </span> <br>
    <span class="hour">Consumed At: {{currentMeal.hour}} </span> <br>
    <span class="date">{{currentMeal.date}} </span>
    </div>
    <span (click)="removeMeal(currentMeal)">X</span>
    <br>
  `
})

export class MealComponent {
  deleteMeal: EventEmitter<Meal>;
  editMeal: EventEmitter<Meal>;
  currentMeal: Meal;
  constructor() {
    this.deleteMeal = new EventEmitter();
    this.editMeal = new EventEmitter();
  }

  removeMeal(meal: Meal) {
    console.log(meal)
    this.deleteMeal.emit(meal);
  }

  changeMeal(meal: Meal) {
    console.log(meal)
    this.editMeal.emit(meal);
  }
}
