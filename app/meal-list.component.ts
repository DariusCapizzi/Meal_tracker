import {  Directive, Input, Component } from '@angular/core';
import { MealComponent } from './meal.component';
import { CreateMealComponent } from './create-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { Meal } from './meal.model';
import { CaloriePipe } from './calorie.pipe';



@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriePipe],
  directives: [ MealComponent, CreateMealComponent, EditMealComponent],
  template: `
    <form>
      <label for="search">search by
        <select #queryStyle>
          <option selected value="max">MAXIMUM</option>
          <option value="min">MINIMUM</option>
        </select>
      calories</label>
      <input id="search" #findCalorie placholder="500">
      <button (click)="setFilter(findCalorie.value, queryStyle.value)">search</button>
    </form>
      <p (click)="setFilter()">See All</p>

    <div>
      <meal *ngFor="#meal of mealList | calorie:filter" [currentMeal]="meal"
      (editMeal)="mealClicked($event)"
      [class.selected]="meal === selectedMeal"
      (deleteMeal)="destroyMeal($event)"
      ></meal>

      <edit-meal *ngIf="selectedMeal" [currentMeal]="selectedMeal" (unselect)=mealUnClicked()></edit-meal>

      <add-meal *ngIf="!selectedMeal" (newMeal)="addMeal($event)"></add-meal>
    </div>

  `
})

export class MealListComponent {

  mealList: Meal[];
  selectedMeal: Meal;
  filter: string = '402;-)max';
  addMeal(meal: Meal) {
    this.mealList.push(meal);
  }

  setFilter(query: string, style: string){
    if(style===undefined){
      style ="all"
    }
    console.log(this.mealList)
    this.filter = query + ";-)" + style ;
  }

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }

  mealUnClicked(): void {
    this.selectedMeal = undefined;
  }

  destroyMeal(meal: Meal) {
    this.mealList.splice(this.mealList.indexOf(meal), 1);
  }
}
