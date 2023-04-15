import { Component, OnInit, SimpleChanges } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedPosition, FlexibleConnectedPositionStrategy, FlexibleConnectedPositionStrategyOrigin } from '@angular/cdk/overlay';
import { Step, Task } from '../models';
import { STEPS } from 'src/app/shared/services/fakeTask';
import { TaskService } from 'src/app/shared/services/task/task.service';
import { Observable, of } from 'rxjs';

const initialValue: Task = {
  id: '',
  name: '',
  description: '',
  priority: 0,
  finish: false,
  date_limit: '',
  //subtask: []
}

type OverlayPartial = Omit<CdkConnectedOverlay, 'overlay' | 'dir' | 'overlayRef' | 'templatePortal' | 'lockPosition' | 'growAfterOpen' | 'flexibleDimensions' | 'push' | 'backdropSubscription' | 'attachSubscription' | 'detachSubscription' | 'positionSubscription' | 'offsetX' | 'offsetY' | 'scrollStrategyFactory'>;

@Component({
  selector: 'app-drag-drop-table',
  templateUrl: './drag-drop-table.component.html',
  styleUrls: ['./drag-drop-table.component.scss']
})

export class DragDropTableComponent implements OnInit {
  lists$: Observable<Step[]> = of([]);
  task: Task;
  isOverlayDisplayed = false;

  overlayOptions: Partial<CdkConnectedOverlay> = {
    hasBackdrop: true,
    // positions: [
    //   { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top' },
    // ]
  };

  position: ConnectedPosition[] = [
    { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top' }
  ]




  listId: string = '';
  //trigger: CdkOverlayOrigin | FlexibleConnectedPositionStrategyOrigin = new CdkOverlayOrigin;

  constructor(
    // private apiService: ApiService, 
  private taskService: TaskService
    ) {
    this.task = initialValue;
  }

  ngOnInit(): void {
    this.lists$ = this.taskService.getSteps();
    // this.getDataList();
    //this.getDataStored();
  }

  // getDataList(): void {

  //   this.lists = STEPS;
    
  //   // this.apiService.getApi().subscribe(
  //   //   (response: any) => (this.lists = response['list']),
  //   //   (error: string) => console.log('Ups! we have an error: ', error)
  //   // );
  // }

  // getDataStored(): void {
  //   this.taskService.getBoardList$
  //     .subscribe(
  //       (response: any) => this.lists = response,
  //       (error: string) => (console.log('Ups! we have an error: ', error))
  //   );
  // }

  displayOverlay(event?: Task): void {
    this.isOverlayDisplayed = true;
    if (!!event) {

      this.task = {
        id: event.id,
        name: event.name,
        description: event.description,
        priority: event.priority,
        finish: event.finish,
        date_limit: event.date_limit,
        subtask: event.subtask
      };

      if(event.id){
        this.listId = event.id;
      }
      
    } else {
      this.task = initialValue;
    }

  }

  hideOverlay(): void {
    this.isOverlayDisplayed = false;
  }
}

