import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';



@Component({
  selector: 'add-meal',
  outputs: ['newMeal'],
  template: `
  <h1 (click)="changeSelection()">Add New Meal</h1>
    <form class="add-meal">
      <label>Name</label>
      <input type="text" #name value="food" placholder="food">
      <label>Details</label>
      <input type="text"  #detail value="lots of it" placholder="lots of it">
      <label>Calorie</label>
      <input type="text"  #calorie value="10" placholder="10">

      <button (click)="createMeal(name.value, detail.value, calorie.value)">Add</button>
    </form>
  `
})

export class CreateMealComponent {
  selected: boolean = false;
  newMeal: EventEmitter<Meal> = new EventEmitter();
  createMeal(name: string, detail: string, calorie: number) {
    this.newMeal.emit(new Meal(name, detail, calorie));
  }
  changeSelection(){
    this.selected = !this.selected;
  }
}
