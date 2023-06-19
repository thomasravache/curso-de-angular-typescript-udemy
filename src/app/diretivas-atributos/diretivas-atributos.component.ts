import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = false;
  public heightPx: string = '20px';
  public nome: string = '';
  public list: Array<{ nome: string }> = [];
  public date: Date = new Date();


  ngOnInit(): void {
    setInterval(() => {
      this.valor ? this.valor = false : this.valor = true;
      this.heightPx === '20px' ? this.heightPx = '50px' : this.heightPx = '20px';
    }, 2000);
  }

  public salvar(): void {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}
