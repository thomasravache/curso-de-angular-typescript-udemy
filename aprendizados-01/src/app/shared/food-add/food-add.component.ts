import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IFoodList } from 'src/app/modules/i-food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {
  constructor(private foodListService: FoodListService) { }

  public listAddItem(value: string): void {
    console.log(value);
    this.foodListService.foodListAdd(value).subscribe({
      next: (res: IFoodList) => this.foodListService.foodListAlert(res),
      error: (error: HttpErrorResponse) => console.log(error),
    });
  }
}
