import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';
import { ActionTask, Step, Task } from '../models';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateTaskComponent } from '../modal-create-task/modal-create-task.component';
import { TaskService } from 'src/app/shared/services/task/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private taskService: TaskService
  ) { }

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
      data: task ? task : null
    })

    dialogTask.afterClosed().subscribe((taskResponse: Task) => {
      if(taskResponse){

        if(task?.id){
          //update flow
          this.taskService.updateTask(idList, taskResponse).subscribe((data) => {
            console.log('data update task = ', data)
          })
         
        } else {
            //create flow
          this.taskService.createTask(idList, taskResponse).subscribe((data) => {
            console.log('data create task = ', data)
          })
        }
        
      }
      
    })

  }

  handleEdit(task: Task){
    if (this.list) {
      task.id = this.list.id;
      this.editTask.emit(task);
    }
  }

  handleTaskCompleted(action: ActionTask){

    switch (action.action) {

      case 'completed':

        this.taskService.completeTask(action.stepId, action.stepId)
        .subscribe((data) => {
          this._snackBar.open('Task Complete!', 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 3500
          })
        })

      break;

      case 'remove':

        this.taskService.removeTask(action.stepId, action.taskId)
        .subscribe((data) => {

          this._snackBar.open('Task Removed!', 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 3500
          })

        })

      break;

      case 'edit':

      this.taskService.getTask(action.stepId, action.taskId).subscribe((task: Task) => {
        this.createTask(action.stepId, task)
      })

        // this.taskService.removeTask(action.stepId, action.taskId)
        // .subscribe((data) => {

        //   this._snackBar.open('Task Removed!', 'Close', {
        //     horizontalPosition: 'center',
        //     verticalPosition: 'top',
        //     duration: 3500
        //   })

        // })

      break;
    
      default:
        break;
    }
   
  }

}
