import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUsernameComponent } from './display-username.component';

describe('DisplayUsernameComponent', () => {
  let component: DisplayUsernameComponent;
  let fixture: ComponentFixture<DisplayUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayUsernameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
