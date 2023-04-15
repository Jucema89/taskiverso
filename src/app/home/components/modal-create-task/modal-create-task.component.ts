import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../models';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ControlsError, getControlValidationErrors, getFormValidationErrors } from 'src/app/shared/helpers/form-handle-error';

@Component({
  selector: 'app-modal-create-task',
  templateUrl: './modal-create-task.component.html',
  styleUrls: ['./modal-create-task.component.scss']
})
export class ModalCreateTaskComponent implements OnInit {

  priorityArray: { label: string, value: number}[] = [
    {
      label: 'One',
      value: 1
    },
    {
      label: 'Two',
      value: 2
    },
    {
      label: 'Three',
      value: 3
    },
    {
      label: 'Four',
      value: 4
    },
    {
      label: 'Five',
      value: 5
    },
  ]

  form: FormGroup = this.fb.group({
    id: this.fb.control('', ),
    name: this.fb.control('', [Validators.required]),
    description: this.fb.control('',[ Validators.required, Validators.minLength(3)]),
    priority: this.fb.control(0, [ Validators.required, Validators.min(1)]),
    finish: this.fb.control(false),
    date_limit: this.fb.control(''),
    subtask: this.fb.control([]),
    assign: this.fb.control([])
  });

  constructor(
    private dialogRef: MatDialogRef<ModalCreateTaskComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
      public data?: Task
  ){
    
  }

  ngOnInit(): void {
    
    if(this.data){ 
      this.form.patchValue(this.data) 
    };
    
    this.inspectForm()
  }

  inspectForm(){
  }

  getErrorMessage(idControl: string): string {
    
    const message: string = getControlValidationErrors(this.form, idControl);
    return message
    
  }

  onSubmit(){

    console.log('this.form = ', this.form.value);

    this.dialogRef.close(
      this.form.value
    )

  }

  close(){
    this.dialogRef.close()
  }
    
  

}
