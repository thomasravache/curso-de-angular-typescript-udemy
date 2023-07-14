import { Component, OnInit } from '@angular/core';
import { IFoodList } from 'src/app/modules/i-food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  public foodList: IFoodList | any;

  constructor(private foodListService: FoodListService) {
    // fazer a injeção de dependência seria o mesmo que fazer isso aqui
    // const myFoodListService = new FoodListService();
    // this.foodList = myFoodListService.foodList();
  }

  // Como está compartilhando o serviço ele será acionado novamente quando
  // a lista da service for alterada por outro component que a estiver utilizando 
  // Utilizamos a comunicação sem utilizar @Output e @Input
  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (value: Array<IFoodList>) => this.foodList = value,
      error: (error: any) => console.log(error),
    });

    // Se inscrevendo no evento para ele me atualizar sempre que o evento for emitido
    this.foodListService.emitEvent.subscribe(
      (res) => alert(`Olha, você adicionou um item => ${res}`),
    )
  }
}
