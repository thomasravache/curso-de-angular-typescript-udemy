import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  public foodList: Array<string> = [];

  constructor(private foodListService: FoodListService) {
    // fazer a injeção de dependência seria o mesmo que fazer isso aqui
    // const myFoodListService = new FoodListService();
    // this.foodList = myFoodListService.foodList();
  }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();
  }
}
