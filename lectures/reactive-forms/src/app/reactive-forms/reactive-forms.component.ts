import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  public submitForm(): void {
    console.log(this.cadastroForm);
  }
}
