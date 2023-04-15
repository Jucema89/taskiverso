import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from "@angular/forms";


  /**
     * 
    get controls has ben changed or controls be dirty, return this.
     * @param form Form to validate
     * @returns 
     */
     export function getDirtyValues
     (form: FormGroup | FormArray | FormControl | AbstractControl)
     : Map<string, any> | any[] | any | undefined {
          if (!form.dirty) {
            return;
          }
  
         if (form instanceof FormControl) {
           return form.value;
         }
  
         if (form instanceof FormGroup) {
            const result = new Map();
            for (const [key, control] of Object.entries(form.controls)) {
            const nestedResult = getDirtyValues(control);
  
             if (nestedResult) {
                result.set(key, getDirtyValues(control));
             }
         }
  
          return result;
       }
  
       if (form instanceof FormArray) {
             const result = new Array();
          form.controls.forEach(control => {
          const nestedResult = getDirtyValues(control);
             if (nestedResult) {
                result.push(nestedResult);
             }
          });
  
        return result;
      }
  
      throw new Error('No estas ingresando un FomControl, FormGroup o FormArray');
     }

     export interface ControlsError {
        contorl: string
        error: string
        errorValue: string
     }

     /**
      * 
        iterate through all the controls in this group of forms and return an array of objects with the control and the error
      * @param formValidate Formgroup to validate
      * @returns { ControlsError[] }
      */

    export function getFormValidationErrors(formValidate: FormGroup):ControlsError[] {

        const controlsErrors: ControlsError[] = [];

        Object.keys(formValidate.controls).forEach(key => {

        const controlErrors: ValidationErrors | null | undefined = formValidate.get(key)?.errors;

        if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {

                controlsErrors.push(
                    {
                        contorl: key,
                        error: keyError,
                        errorValue: controlErrors[keyError]
                    }
                )
            // console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);

            });
        }

        });

        return controlsErrors
    }

    export function getControlValidationErrors(formValidate: FormGroup, control: string):string {

        const controlsErrors: ControlsError[] = [];

        Object.keys(formValidate.controls).forEach(key => {

        const controlErrors: ValidationErrors | null | undefined = formValidate.get(key)?.errors;

        if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {

                controlsErrors.push(
                    {
                        contorl: key,
                        error: keyError,
                        errorValue: controlErrors[keyError]
                    }
                )
            // console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
            });
        }

        });

        const index: number =  controlsErrors.findIndex((errors) => errors.contorl === control);



        return types_errorr(controlsErrors[index].error) 
    
    }


    /**
     * 
     * @param error erorr code
     * @param min errors min, number minimun require
     * @returns message for this control with error
     */
    function types_errorr(error: string, min?: number): string {

        switch (error) {
            case 'required':
               return 'This field is required'
                break;

            case 'MIN':
            return `The minimum value allowed is ${min}`
            break;
        
            default:
                return 'Field with error'
                break;
        }
        
    }
    
    