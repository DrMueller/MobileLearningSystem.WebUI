import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavigationListComponent } from './app-navigation-list.component';

describe('AppNavigationListComponent', () => {
  let component: AppNavigationListComponent;
  let fixture: ComponentFixture<AppNavigationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavigationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavigationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
