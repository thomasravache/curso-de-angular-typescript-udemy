import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
// Toda lógica javascript é colocada aqui
export class TitleComponent implements OnInit, OnChanges {

  @Input() // Decorator da propriedade title para entrada de dados
  public title: string = "Bem vindo!";

  constructor() { }
  
  // é sempre invocado quando vem um dado de fora
  ngOnChanges(changes: SimpleChanges): void {
    // Vai ser chamado quando algum dado é alterado no componente
    console.log("Foi alterado com sucesso!");
  }

  // Quando iniciar o componente ele vai fazer algo (Ciclo de vida do componente)
  ngOnInit(): void {
    
  }
}
