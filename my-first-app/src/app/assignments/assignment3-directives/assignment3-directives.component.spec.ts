import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3DirectivesComponent } from './assignment3-directives.component';

describe('Assignment3DirectivesComponent', () => {
  let component: Assignment3DirectivesComponent;
  let fixture: ComponentFixture<Assignment3DirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment3DirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
