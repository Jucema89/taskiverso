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
      name: 'Home',
      id: '0',
      route: '/home',
      icon: 'home'
    },
    {
      name: 'Skill',
      id: '1',
      route: '/skills',
      icon: 'skill'
    },
    {
      name: 'About',
      id: '2',
      route: '/about',
      icon: 'about'
    },
  ];

}
