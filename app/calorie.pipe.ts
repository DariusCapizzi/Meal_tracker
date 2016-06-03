import { Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calorie',
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalorie = args[0];

    return input.filter((meal) => {
      return meal.calories < desiredCalorie;
    });
  }
}
