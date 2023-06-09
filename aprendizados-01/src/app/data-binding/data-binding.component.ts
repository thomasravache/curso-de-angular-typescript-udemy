import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome: string = "Thomas";
  public idade: number = 24;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://th.bing.com/th/id/OIP.SUAt8oYIRxCnXNUOVMmmvAHaG2?w=197&h=183&c=7&r=0&o=5&pid=1.7";
  public imgTitle: string = "Imagem teste"

  public position: { x: number, y: number } = { x: 0, y: 0 };

  constructor () {}

  public alertaInfo(valor: MouseEvent): void {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    // console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
