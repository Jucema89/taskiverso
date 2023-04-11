import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { take } from 'rxjs';
import { ICONS } from '../icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  constructor(
    private matIconRegistry: MatIconRegistry,
  ){

  }

  ngOnInit(): void {
    
  }

  getIcons() {
    ICONS.map((icon: string) => {
      this.matIconRegistry.getNamedSvgIcon(icon).pipe(take(1)).subscribe();
    });
  }

}
