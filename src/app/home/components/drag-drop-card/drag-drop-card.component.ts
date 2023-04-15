import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionTask, Step, Task } from '../models';
import { OutletContext } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-drag-drop-card',
  templateUrl: './drag-drop-card.component.html',
  styleUrls: ['./drag-drop-card.component.scss']
})
export class DragDropCardComponent {

  @Input() task: Task | null = null;
  @Input() list: Step | null = null;
  @Output() taskAction$: EventEmitter<ActionTask> = new EventEmitter()

  task$: Observable<Task | null> = of(this.task)

  handleEditTask(task: Task){
    console.log('handleEditTask = ', task)
  }

  removeTask(id: string){
    console.log('removeTask = ', id)
  }

  actionTask(setAction: 'completed' | 'remove' | 'edit'){

    if(this.task && this.list){

      const action: ActionTask = {
        stepId: this.list.id,
        taskId: this.task.id,
        action: setAction
      }

      this.taskAction$.emit(action)
    }
    
  }
  

}
