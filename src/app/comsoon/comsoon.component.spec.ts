import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsoonComponent } from './comsoon.component';

describe('ComsoonComponent', () => {
  let component: ComsoonComponent;
  let fixture: ComponentFixture<ComsoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComsoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
