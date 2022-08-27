import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewacademicaComponent } from './newacademica.component';

describe('NewacademicaComponent', () => {
  let component: NewacademicaComponent;
  let fixture: ComponentFixture<NewacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewacademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
