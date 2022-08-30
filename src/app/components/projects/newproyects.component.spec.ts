import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproyectsComponent } from './newproyects.component';

describe('NewproyectsComponent', () => {
  let component: NewproyectsComponent;
  let fixture: ComponentFixture<NewproyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewproyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewproyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
