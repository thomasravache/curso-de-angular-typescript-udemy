import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
// Toda lógica javascript é colocada aqui
export class TitleComponent implements OnInit {

  public title: string = "Bem vindo!";

  constructor() { }

  // Quando iniciar o componente ele vai fazer algo (Ciclo de vida do componente)
  ngOnInit(): void {
    
  }
}
