import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  // esse valor pode vir de outro componente quando temos o decorator @Input
  @Input() public contador: number = 0;

}
