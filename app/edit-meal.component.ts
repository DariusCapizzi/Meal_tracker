import { Component } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'edit-meal',
  inputs: ['currentMeal'],
  template: `
  <h2> Edit Meal </h2>
    <form class="editor">
      <label>Name</label>
      <input type="text" [(ngModel)]="currentMeal.mealName">
      <label>Details</label>
      <input type="text" [(ngModel)]="currentMeal.details">
      <label>Calories</label>
      <input type="text" [(ngModel)]="currentMeal.calories">
    </form>
  `
})
 export class EditMealComponent {
   currentMeal: Meal;
 }
