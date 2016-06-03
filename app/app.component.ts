import { Component } from '@angular/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <h1 class="title-heading"> hey cool so this is my project </h1>
    <div class="container">
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})

export class AppComponent {
  meals: Meal[] = [];
  constructor(){
    this.meals.push(
      new Meal('ham', 'salty', 400),
      new Meal('telivision', 'misspelled', 401),
      new Meal('no worries', 'failure guarenteed', 506)
    )
  }
}
