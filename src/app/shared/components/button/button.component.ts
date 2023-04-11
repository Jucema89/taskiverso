import { Component, EventEmitter, Input, Output, ElementRef } from '@angular/core';

/**
 * Crea un Boton ajustado a los estilos de la app. Dependiendo de la clase dada al Input sera su estilo.
 *
 *  Componente basico esencial de los Botones dentro de la App, cualquier otro boton ha de ser una extension/modificacion de este, ya que esta clase posee los estilos core correctos.
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  /**
  *string con el icono a mostrar en el boton
  */
  @Input() icon: string = '';
  /**
  *string con el texto a mostrar en el boton
  */
  @Input() text: string = '';
  /**
  * string con el idUnico del Boton, IMPORTANTE: este id es el que retorna el evento click
  */
  @Input() idButton: string = '';
  /**
   * string con la clase css del boton.
   */
  @Input() class:
    'btn_basic' |
    'btn_primary' |
    'btn_success' |
    'btn_danger' |
    'btn_icon_small_primary' |
    'btn_icon_small_basic' |
    'btn_icon_small_success' | 
    'btn_icon_small_danger' |
    'btn_small_primary' |
    'btn_small_basic' |
    'btn_small_success' | 
    'btn_small_danger' |
    'btn_basic_big' |
    'btn_danger_big' |
    'btn_primary_big' |
    'btn_success_big' |
    'btn_empty_state' |
    'btn_primary_login' = 'btn_primary';
  /**
   * string con la ubicacion del icono dentro del boton, por defecto es izq
   */
  @Input() iconDir: 'izq' | 'der' = 'izq';
  /**
* boolean que define de manera reactiva si el boton esta habilitado, es false por defecto
*/
  @Input() disabling: boolean = false;
  disableForClone: boolean = false;
  /**
  * Emite el Id del Boton para que el componente importador lo distinga y dispare los metodos necesarios  
  */
  @Output() clicker: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private elRef:ElementRef
  ) {
   }

  /**
   * Emite el Id del Boton para que el componente importador lo distinga y dispare los metodos necesarios  
   */
  public onEmit() {
    this.clicker.emit(this.idButton)
  }


}
