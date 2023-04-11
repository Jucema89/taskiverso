import { Component } from '@angular/core';
import { ButtonHeader } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  buttons: ButtonHeader[] = [
    {
      name: 'Add Task',
      id: '0',
      route: '/home',
      icon: 'file-add'
    },
    {
      name: 'Add Step',
      id: '0',
      route: '/home',
      icon: 'add-step'
    },
    
  ];

}
