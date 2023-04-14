import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';
import { Step, Task } from '../models';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateTaskComponent } from '../modal-create-task/modal-create-task.component';

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

  constructor(
    public dialog: MatDialog
  ) {}

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

  createTask(idList: string, task?: Task){

    const dialogTask = this.dialog.open(ModalCreateTaskComponent, {
      disableClose: true,
    })

    dialogTask.afterClosed().subscribe((task: Task) => {
      
    })

  }

  handleEdit(task: Task){
    if (this.list) {
      task.id = this.list.id;
      this.editTask.emit(task);
    }
  }

}
