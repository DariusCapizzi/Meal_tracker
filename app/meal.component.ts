import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal',
  inputs: ['currentMeal'],
  template: `
    <div class="meal"> <span class="meal-name">Meal:</span> {{currentMeal.mealName}}
    <span class="details">Details:</span> {{currentMeal.details}}
    <span class="calories">Calories:</span> {{currentMeal.calories}} </div>
  `
})

export class MealComponent {
  currentMeal: Meal;
}
