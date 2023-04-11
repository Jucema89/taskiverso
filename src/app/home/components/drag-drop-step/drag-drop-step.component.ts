import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';
import { Step, Task } from '../models';

@Component({
  selector: 'app-drag-drop-step',
  templateUrl: './drag-drop-step.component.html',
  styleUrls: ['./drag-drop-step.component.scss']
})
export class DragDropStepComponent {

  @Input() stepLists: CdkDropList<Task>[] = []

  tasks: Task[] = [];

  @Input() list?: Step;
  @Output() editTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
    }
  }

  handleEdit(task: Task){
    if (this.list) {
      task.id = this.list.id;
      this.editTask.emit(task);
    }
  }

}
