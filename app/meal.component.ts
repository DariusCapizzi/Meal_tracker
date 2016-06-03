import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal',
  inputs: ['currentMeal'],
  template: `
    <div class="meal"> <span class="meal-name">Meal: {{currentMeal.mealName}} </span>
    <span class="details">Details: {{currentMeal.details}}</span>
    <span class="calories">Calories: {{currentMeal.calories}} </span></div>
  `
})

export class MealComponent {
  currentMeal: Meal;
}
