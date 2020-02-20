import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAllComponent } from './grid-all.component';

describe('GridAllComponent', () => {
  let component: GridAllComponent;
  let fixture: ComponentFixture<GridAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
