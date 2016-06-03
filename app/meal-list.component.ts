import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { CreateMealComponent } from './create-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriePipe],
  directives: [MealComponent, CreateMealComponent, EditMealComponent],
  template: `
    <form>
      <label for="search">search by calorie</label>
      <input id="search" #findCalorie>
      <button (click)="setFilter(findCalorie.value)">search</button>
    </form>
    <div>
    <meal *ngFor="#meal of mealList" [currentMeal]="meal">
    </meal>
    <add-meal (newMeal)="addMeal($event)"></add-meal>
    </div>
  `
})

export class MealListComponent {
  mealList: Meal[];
  filter: string = '';
  addMeal(meal: Meal) {
    this.mealList.push(meal);
  }
  setFilter(query: string){
    this.filter = query;
  }
}
