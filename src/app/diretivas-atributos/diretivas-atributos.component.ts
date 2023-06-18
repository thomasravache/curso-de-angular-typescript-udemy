import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = false;
  public heightPx: string = '20px';

  ngOnInit(): void {
    setInterval(() => {
      this.valor ? this.valor = false : this.valor = true;
      this.heightPx === '20px' ? this.heightPx = '50px' : this.heightPx = '20px';
    }, 2000);
  }
}
