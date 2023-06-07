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
    <app-title title="Olá mundo"></app-title>
    {{valor}}
    <button (click)="adicionar()">Adicionar</button>
    <router-outlet></router-outlet>
  `,
  // tem mais propriedades a serem utilizadas
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  // Propriedade pública
  // public title = "Bem vindo!";

  public valor: number = 1;

  constructor() {

  }

  public adicionar(): number {
    return this.valor += 1;
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(1);
    }, 5000)
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  } 
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  } 
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  } 
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  } 
  ngAfterViewChecked() {
    console.log('ngAfterViewCHecked');
  }
}
