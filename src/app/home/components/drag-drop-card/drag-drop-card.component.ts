import { Component, Input } from '@angular/core';
import { Step, Task } from '../models';

@Component({
  selector: 'app-drag-drop-card',
  templateUrl: './drag-drop-card.component.html',
  styleUrls: ['./drag-drop-card.component.scss']
})
export class DragDropCardComponent {

  @Input() task?: Task;
  @Input() list?: Step;

  handleEditTask(task: Task){
    console.log('handleEditTask = ', task)
  }

  removeTask(id: string){
    console.log('removeTask = ', id)
  }
  

}
