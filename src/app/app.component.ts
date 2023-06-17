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
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <router-outlet></router-outlet>
  `,
  // tem mais propriedades a serem utilizadas
})
export class AppComponent implements OnInit {
  // Propriedade pública
  // public title = "Bem vindo!";

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
