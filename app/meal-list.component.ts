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
      <label for="search">search by MAXIMUM calories</label>
      <input id="search" #findCalorie>
      <button (click)="setFilter(findCalorie.value)">search</button>
    </form>
    <div>
    <meal *ngFor="#meal of mealList | calorie:filter" [currentMeal]="meal"
    (click)="mealClicked(meal)"
    [class.selected]="meal === selectedMeal"
    (deleteMeal)="destroyMeal($event)"
    >

    </meal>
    <edit-meal *ngIf="selectedMeal" [currentMeal]="selectedMeal"></edit-meal>
    <add-meal (newMeal)="addMeal($event)"></add-meal>
    </div>
  `
})

export class MealListComponent {
  mealList: Meal[];
  selectedMeal: Meal;
  filter: string = '1000';
  addMeal(meal: Meal) {
    this.mealList.push(meal);
  }
  setFilter(query: string){
    this.filter = query;
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
  destroyMeal(meal: Meal) {
    this.mealList.splice(this.mealList.indexOf(meal), 1);
  }
}
