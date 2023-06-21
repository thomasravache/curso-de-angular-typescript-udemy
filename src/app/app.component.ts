import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

/*
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
*/

@Component({
  selector: 'app-root',
  // transferir pra cá o router pra ficar mais organizado
  template: `
    <!-- <app-data-binding></app-data-binding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->

    <!-- <app-diretivas-atributos>
      <h1>Aula de Diretivas de Atributo</h1>
      <hr>
    </app-diretivas-atributos> -->

    <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
    <!-- <app-new-component></app-new-component> -->
    <app-input [contador]="addValue"></app-input> <br>
    <button (click)="add()">Add</button>

    <br>

    <app-output></app-output>
    <router-outlet></router-outlet>
  `,
  // tem mais propriedades a serem utilizadas
})
export class AppComponent implements OnInit {
  // Propriedade pública
  // public title = "Bem vindo!";

  // Esse valor é passado pro contador do componente app-input
  public addValue: number = 0;

  public add(): void {
    this.addValue += 1;
  }

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
