import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // transferir pra cá o router pra ficar mais organizado
  template: '<router-outlet></router-outlet>',
  // tem mais propriedades a serem utilizadas
})
export class AppComponent implements OnInit {
  // Propriedade pública
  // public title = "Bem vindo!";

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(1);
    }, 5000)
  }
}
