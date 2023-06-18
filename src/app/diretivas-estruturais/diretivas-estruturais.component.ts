import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number | null }> = [
    { nome: 'Thomas Ravache', idade: 24 },
    { nome: 'Maneiro', idade: 10 },
    { nome: 'Maluquete', idade: 5 }
  ];
  public form: { nome: string, idade: number | null } = {
    nome: '',
    idade: null,
  };
  public nome: string = 'thomas';

  constructor() {

  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(): void {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList(): void {
    this.list.push(this.form);

    this.form = {
      nome: '',
      idade: null,
    };
  }

  public onClickEventList(event: MouseEvent, index: number) {
    console.log(event);
    console.log(`você clicou no item de index ${index}`);
    this.list.splice(index, 1);
  }
}
