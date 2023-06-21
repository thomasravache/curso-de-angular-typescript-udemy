import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  // EventEmitter vai falar que está emitindo um valor e o output vai avisar os outros componentes pra pegar o valor
  // Vai ser utilizado igual se fosse um evento de (click) por exemplo
  @Output() public enviarDados = new EventEmitter();
  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'Thomas', idade: 24 },
    { nome: 'Maneiro', idade: 28 },
    { nome: 'Legal', idade: 21 },
  ];

  public getDados(itemIndex: number): void {
    this.enviarDados.emit(this.list[itemIndex]);
  }
}
