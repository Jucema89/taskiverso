import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { delay } from 'rxjs/operators';


/**
 * Menu User
 * 
 * Menu superior izquierdo que muestra informacion del usuario de la app y despliega opciones relacionadas con su cuenta y plan.
 */
@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent implements OnInit {


  /**Nombre para el perfil de la barra de navegacion */
  nameToProfile: string = '';
  /**Email para el perfil de la barra de navegacion */
  emailToProfile: string = '';
  /**Imagen para el perfil de la barra de navegacion */
  imageToProfile: string = '';

  /**
   * Observable que contiene usuario actual
   */
  //showFiller = false;
  /**
   * Contiene el tamanio actual de pantalla
   */
  @Input() display: string ='';
  /**
   * Emite el click del menu hamburguesa en caso de estar en tamanio de celulares
   */
  @Output() menuMobile = new EventEmitter();

  /**
   * Emite el click para cerrar el sidenav derecho con la informacion del usuario
   */
  @Output() offSidenav = new EventEmitter(false);

  /**
   * 
   * @param auth Trae informacion del login y autenticacion del usuario
   * @param router Usada para saber la ruta actual y usar sus parametros 
   * @param dialog Abre dialogos y modales 
   * @param notifyService Dispara notificaciones Toast
   */
  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {
    // this.currentUser$.subscribe((user) => {
    //   console.log('user login', user)
    //   console.log('user JSON = ',user.toJSON);
    //   this.imageToProfile = user.photoURL;
    //   this.nameToProfile = user.displayName;
    //   this.emailToProfile = user.email;
    // })

    // this.imageToProfile = this.currentUser.photoURL;
    // this.nameToProfile = this.currentUser.displayName;
    // this.emailToProfile = this.currentUser.email
   }

  ngOnInit(): void {
  }

  /**
   * 
   * @param {OptionMenu} menu Opcion de menu seleccionada
   * 
   * dispara la ruta segun la opcion de menu seleccionada
   */
  goToRoute(route: string) {
    switch (route) {
      case 'one':
        this.changePassword()
        break;

      case 'two':
        this.logout()
        break;

      default:
        this.router.navigate([route]);
        break;
    }
  }

  /**
   * Abre un modal de confirmacion de cambio de password, si se escoge continuar se envia un correo para continuar el proceso de cambio
   */
  changePassword() {
    // this.dialog.open(ModalGrlComponent, {
    //   data: {
    //     icon: 'doubt',
    //     textOne: 'Está seguro que desea ',
    //     textFocus: 'cambiar su contraseña',
    //     buttons: [
    //       {
    //         icon: 'arrow_left',
    //         text: 'Regresar',
    //         id: 'back',
    //         clase: 'btn_primary'
    //       },
    //       {
    //         icon: 'check_solid',
    //         text: 'Si cambiarla',
    //         id: 'change',
    //         clase: 'btn_success',
    //       }
    //     ]
    //   }
    // }).afterClosed().subscribe((click: any) => {
    //   if (click.data === 'change') {
    //     const email = this.currentUser.email;
    //     this.auth.resetPassword(email).subscribe(
    //       () => this.notifyService.info('Correo Enviado!', 'Se ha enviado un correo para el cambio de contraseña a ' + email, 4000, {
    //         text: 'Entendido',
    //         orientation: 'izq'
    //       })
    //     )
    //   } else {
    //     this.notifyService.error('Cambio cancelado!', 'Cancelaste la solicitud de cambio de contraseña', 4000, {
    //       text: 'Entendido',
    //       orientation: 'izq'
    //     })
    //   }
    // })
  }

  /**
   * Abre el modal de reporte de errores
   */
  dialogTicket() {
    //this.dialog.open(DialogTicketComponent)
  }

  closeSidenav() {
    this.offSidenav.emit(true);
  }

  /**
 * Elimnina la data del usuario actual de la App y lo redirige al login inicial
 */
  logout() {
    // this.auth.logOut().pipe(
    //   delay(1000)
    // ).subscribe(
    //   () => {
    //     this.router.navigate(['/auth/login']);
    //   }
    // );
  }

}
