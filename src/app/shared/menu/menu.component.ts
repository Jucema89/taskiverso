import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { ICONS } from '../icons';

interface actionsForDispatchs {
  route: string
  dispatchs: any[]
}

/**
 * App Menu
 * 
 * Menu superior de la App, contiene: 
 * 
 * - Logo de la App
 * - App de Folder de Projectos
 * - Counter de tiempo en caso de cuentas de prueba
 * - Botones especiales de Depuracion y F110
 * - App de perfil de Usuario con menu Dropdown
 * 
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  displayDialog = false;
  dialogStyle = { width: '90vw', height: '100vh' };
  minimized = false;
  postion = 'center';


  /**
  * String con url de imagen de perfil a mostrar
  */
  @Input() image: string = '';
  /**
   * Array con opciones de Botones especiales
   */

  /**
   * Evento que emite acciones del menu para mobiles cuando este habnilitado
   */
  @Output() menuMobile = new EventEmitter();

  @Output() sidenavProfile = new EventEmitter();

  /**
   * Vheigt o altura de pantalla/resolucion actual
   */
  public vHeight: number = 50;

  public showMe: boolean = true;


  /**
   * Constructor
   * 
   * @param depService Informacion de Depuracion de renta
   * @param store Conexion al store de la aplicacion
   * @param notifyService Crea Notificaciones Toast
   * @param planService Informacion del plan del usuariom actual
   * @param router muestra ruta actual y permite disparar nuevas rutas
   * @param dialog permite abrir dialogos y modales 
   * @param document data recibida en formato document
   */
  constructor(
    private matIconRegistry: MatIconRegistry,
    private router: Router,
    private dialog: MatDialog,
  ) {

  }

  getIcons() {
    ICONS.map((icon: string) => {
      this.matIconRegistry
        .getNamedSvgIcon(icon)
        .pipe(take(1)).subscribe();
    });
  }

  /**
   * Se subscribe al planService y obtiene el plan actuial del usuario, si es gratuito muestra la cuenta atras.
   * 
   * Se subscribe al observador de la resolucion de pantalla y setea el valor a display
   */
  ngOnInit(): void {
  }


}
