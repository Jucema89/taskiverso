import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { Step, Task } from 'src/app/home/components/models';
import { STEPS, TASK_FINISH } from '../fakeTask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  serviceListSteps$: Observable<Step[]> = of(STEPS)
  serviceListTaskCompleted$: Observable<Task[]> = of(TASK_FINISH)

   getSteps(): Observable<Step[]>{
    return this.serviceListSteps$.pipe(
      map((steps: Step[]) => {
        return steps
      })
    )
   }

   getStep(idStep: string): Observable<Step>{
    return this.serviceListSteps$.pipe(
      map((steps: Step[]) => {
        let index = steps.findIndex((step) => step.id === idStep);
        return steps[index];
      })
    )
   }

   getTasks(idStep: string): Observable<Task[]>{
    return this.serviceListSteps$.pipe(
      map((steps: Step[]) => {
        let index = steps.findIndex((step) => step.id === idStep);
        return steps[index].tasks
      })
    )
   }

   getTask(idStep: string, idTask: string): Observable<Task>{
    return this.serviceListSteps$.pipe(
      map((steps: Step[]) => {
        const step: Step = steps.filter(st => st.id === idStep)[0];
         return step.tasks.filter((tsk) => tsk.id === idTask)[0];
      })
    )
   }

   createTask(idStep: string, task: Task): Observable<Step>{
    return this.getStep(idStep).pipe(map((step: Step) => {


      step.tasks.push(task);
      return step
    }))
   }

   updateTask(idStep: string, task: Task): Observable<Step>{
    return this.getStep(idStep).pipe(map((step: Step) => {

      var foundIndex = step.tasks.findIndex(tsk => tsk.id == task.id);
      step.tasks[foundIndex] = task;
   
      return step
    }))
   }

  removeTask(idStep: string, taskId: string): Observable<Step>{
    return this.getStep(idStep).pipe(map((step: Step) => {

      let foundIndex = step.tasks.findIndex(tsk => tsk.id == taskId);
      step.tasks.splice(foundIndex, 1)
    
      return step
    }))
  }

  completeTask(idStep: string, taskId: string): Observable<Step>{
    return this.getStep(idStep).pipe(
      switchMap((step: Step) => {
      
      //found specific task and index
      const taskFinded: Task = step.tasks.filter((tsk: Task) => tsk.id === taskId)[0];
      let foundIndex = step.tasks.findIndex(tsk => tsk.id == taskId);

      return this. serviceListTaskCompleted$.pipe(
        map((taskSuccess: Task[]) => {

        //add task completed to list success
        taskSuccess.push(
          taskFinded
        )
        //remove task of the list all tasks
        step.tasks.splice(foundIndex, 1)
        return of(step)
      }))
    
    }),
    catchError((err) => {
      return of(err)
    }))
  }


}
