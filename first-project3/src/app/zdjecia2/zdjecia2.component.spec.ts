import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zdjecia2Component } from './zdjecia2.component';

describe('Zdjecia2Component', () => {
  let component: Zdjecia2Component;
  let fixture: ComponentFixture<Zdjecia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zdjecia2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zdjecia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
