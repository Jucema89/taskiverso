import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubtaskComponent {

  @Input() subtask?: Task
  @Output() checked: EventEmitter<boolean> = new EventEmitter()

  handleChecked(data:any){
    console.log('check = ', data);
  }


}
