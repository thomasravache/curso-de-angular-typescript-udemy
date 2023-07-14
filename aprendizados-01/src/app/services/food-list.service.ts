import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFoodList } from '../modules/i-food-list';

/* 
  Injectable quer dizer que é pra ser utilizado como injeção de dependência

  providedIn: root -> significa que ele fica visível para todos os componentes poderem utilizá-lo

  se não estiver só no root dá pra pega-lo importando ele no provider
*/
@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  public emitEvent = new EventEmitter();

  private _list: Array<string> = [
    'X Bacon',
    'Feijão',
    'Ovo'
  ];

  private readonly _url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  // public foodList() {
  //   return this._list;
  // }

  public foodList(): Observable<Array<IFoodList>> {
    return this.http.get<Array<IFoodList>>(`${this._url}/list-food`)
      .pipe(
        (res) => res,
        (error) => error,
      ); // pipe: proximo passo
  }

  public foodListAdd(value: string): void {
    this.foodListAlert(value);
    this._list.push(value);
  }

  public foodListAlert(value: string): void {
    return this.emitEvent.emit(value);
  }
}
