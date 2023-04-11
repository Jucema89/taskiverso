import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropStepComponent } from './drag-drop-step.component';

describe('DragDropStepComponent', () => {
  let component: DragDropStepComponent;
  let fixture: ComponentFixture<DragDropStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
