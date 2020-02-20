import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCreateComponent } from './grid-create.component';

describe('GridCreateComponent', () => {
  let component: GridCreateComponent;
  let fixture: ComponentFixture<GridCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
