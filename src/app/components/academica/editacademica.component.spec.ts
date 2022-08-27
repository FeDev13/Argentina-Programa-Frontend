import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditacademicaComponent } from './editacademica.component';

describe('EditacademicaComponent', () => {
  let component: EditacademicaComponent;
  let fixture: ComponentFixture<EditacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditacademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
