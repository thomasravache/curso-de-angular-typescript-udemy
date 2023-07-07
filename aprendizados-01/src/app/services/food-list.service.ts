import { Injectable } from '@angular/core';

/* 
  Injectable quer dizer que é pra ser utilizado como injeção de dependência

  providedIn: root -> significa que ele fica visível para todos os componentes poderem utilizá-lo

  se não estiver só no root dá pra pega-lo importando ele no provider
*/
@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  private _list: Array<string> = [
    'X Bacon',
    'Feijão',
    'Ovo'
  ];

  constructor() { }

  public foodList() {
    return this._list;
  }

  public foodListAdd(value: string) {
    this._list.push(value);
  }
}
