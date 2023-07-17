import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IFoodList } from 'src/app/modules/i-food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  public foodList: Array<IFoodList> = [];

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
      (res: IFoodList) => {
        alert(`Olha, você adicionou um item => ${res.nome}`);
        this.foodList.push(res);
      }
    )
  }

  public foodListDelete(id: number): void {
    this.foodListService.foodListDelete(id).subscribe({
      next: (_res) => {
        const { nome } = this.foodList.find((item) => item.id === id) as IFoodList;

        alert(`Olha, você deletou um item => ${nome ?? ''}`);
        this.foodList = this.foodList.filter((item) => item.id !== id);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  public foodListEdit(nome: string, id: number): void {
    this.foodListService.foodListEdit(nome, id).subscribe({
      next: (res: IFoodList) => {
        console.log(res);
      },
      error: (error: HttpErrorResponse) => console.log(error),
    })
  }
}
