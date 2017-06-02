import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactSelectComponent } from './fact-select.component';

describe('FactSelectComponent', () => {
  let component: FactSelectComponent;
  let fixture: ComponentFixture<FactSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
