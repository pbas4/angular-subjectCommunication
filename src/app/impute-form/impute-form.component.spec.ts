import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputeFormComponent } from './impute-form.component';

describe('ImputeFormComponent', () => {
  let component: ImputeFormComponent;
  let fixture: ComponentFixture<ImputeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
