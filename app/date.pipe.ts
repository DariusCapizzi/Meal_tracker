import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'date',
  pure: false
})

export class DatePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var currentFilter = args;
    // console.log("DATEPIE")
    return input.filter((meal) => {
      return true
    });
  }
}
