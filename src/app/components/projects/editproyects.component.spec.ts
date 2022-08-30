import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproyectsComponent } from './editproyects.component';

describe('EditproyectsComponent', () => {
  let component: EditproyectsComponent;
  let fixture: ComponentFixture<EditproyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
