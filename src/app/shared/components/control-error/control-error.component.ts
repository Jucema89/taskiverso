import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlsError, getControlValidationErrors, getFormValidationErrors } from '../../helpers/form-handle-error';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss']
})
export class ControlErrorComponent {

  constructor(
    private fb: FormBuilder
  ){}

  @Input() form: FormGroup = this.fb.group({})
  @Input() control: string = ''
  @Input() customMessage?: string


  getMessageError(): string{
   return getControlValidationErrors(this.form, this.control);
  }

}
