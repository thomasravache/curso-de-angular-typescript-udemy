import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  public get teste(): any {
    return this.cadastroForm.get('lastName')?.errors
  }

  public getErrors(field: string): ValidationErrors | any {
    return (this.cadastroForm.get(field) as AbstractControl | any)?.errors;
  }

  public submitForm(): void {
    if (this.cadastroForm.invalid) return;

    console.log(this.cadastroForm);
  }
}
