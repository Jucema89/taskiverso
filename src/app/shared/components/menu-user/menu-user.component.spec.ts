import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUserComponent } from './menu-user.component';

xdescribe('MenuUserComponent', () => {
  let component: MenuUserComponent;
  let fixture: ComponentFixture<MenuUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
