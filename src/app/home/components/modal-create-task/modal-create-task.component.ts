import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../models';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ControlsError, getFormValidationErrors } from 'src/app/shared/helpers/form-handle-error';

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
      label: 'Tqo',
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
    description: this.fb.control('',[ Validators.required]),
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

  getErrorMessage(idControl: string) {
    
    const controlsError: ControlsError[] = getFormValidationErrors(this.form);

    controlsError.forEach((control: ControlsError) => {
      if(control.contorl === idControl){

      }
    })

    //console.log('this.form.get(idControl)?.hasError = ', this.form.get(idControl)?.errors)

    // if (this.form.get(idControl)?.hasError('required')) {
     
    //   return 'This field is required';
    // } 

    // if (this.form.get(idControl)?.hasError('min')) {

    //   if(idControl === 'priority'){

    //     let validate: ValidationErrors = this.form.get(idControl)?.errors; 
    //     console.log('min = ', validate)
    //     //validate = validate

    //     return `The min Value is ${validate}`
    //   }
     
    //   return 'This field is required';
    // } 

    

    // return 'Field with error'
   
  }



  onSubmit(){
    if(this.form?.valid){
      this.dialogRef.close(
        this.form.value
      )
    }
    
  }

  

}
