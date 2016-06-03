import { Component } from '@angular/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <h1 class="title-heading"> hey cool so this is my project </h1>
    <div>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})

export class AppComponent {
  meals: Meal[] = [];
  constructor(){
    this.meals.push(
      new Meal('ham', 'salty', 400, "18:00", "Fri Jun 03 2016 15:47:29 GMT-0700 (PDT)"),
      new Meal('telivision', 'misspelled', 401, "23:54 ", "Fri Apr 01 2016 00:00:00 GMT-0700 (PDT)"),
      new Meal('no worries', 'failure guarenteed', 506, "18:00", "Tue Jul 05 2016 00:00:00 GMT-0700 (PDT)")
    )
  }
}
