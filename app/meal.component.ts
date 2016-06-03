import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal',
  inputs: ['currentMeal'],
  outputs: ["deleteMeal"],
  template: `
    
    <div class="meal"> <span class="meal-name">Meal: {{currentMeal.mealName}} </span><br>
    <span class="details">Details: {{currentMeal.details}}</span><br>
    <span class="calories">Calories: {{currentMeal.calories}} </span>
    </div>
    <span (click)="removeMeal(currentMeal)">X</span>
  `
})

export class MealComponent {
  deleteMeal: EventEmitter<Meal>;
  currentMeal: Meal;
  constructor() {
    this.deleteMeal = new EventEmitter();
  }

  removeMeal(meal: Meal) {
    console.log(meal)
    this.deleteMeal.emit(meal);
  }
}
