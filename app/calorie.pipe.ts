import { Pipe, PipeTransform} from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calorie',
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    // console.log("caloriesPIpE")

    var desiredCalorie = args.split(";-)");

    if (desiredCalorie[1] === "max"){
      return input.filter((meal) => {
        return meal.calories < parseInt(desiredCalorie[0]);
      });
    } else if (desiredCalorie[1] === "min") {
      return input.filter((meal) => {
        return meal.calories > parseInt(desiredCalorie[0]);
      });
    }

    else if (desiredCalorie[1] === "all") {
      return input.filter((meal) => {
        return true
      });
    }


  }
}
