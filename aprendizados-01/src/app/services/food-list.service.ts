import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token' // exemplo
    })
  }

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

  // public foodListAdd(value: string): void {
  //   this.foodListAlert(value);
  //   this._list.push(value);
  // }

  public foodListAdd(value: string): Observable<IFoodList> {
    // depois da requisição o pipe entra para fazer o tratamento pra quem for pegar a informação
    return this.http.post<IFoodList>(`${this._url}/list-food`, { nome: value }, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error,
      );
  }

  public foodListEdit(value: string, id: number): Observable<IFoodList> {
    // depois da requisição o pipe entra para fazer o tratamento pra quem for pegar a informação
    return this.http.put<IFoodList>(`${this._url}/list-food/${id}`, { nome: value }, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error,
      );
  }

  public foodListDelete(id: number): Observable<any> {
    // depois da requisição o pipe entra para fazer o tratamento pra quem for pegar a informação
    return this.http.delete<any>(`${this._url}/list-food/${id}`, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error,
      );
  }

  public foodListAlert(value: IFoodList): void {
    return this.emitEvent.emit(value);
  }
}
