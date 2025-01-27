import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdjeciaComponent } from './zdjecia.component';

describe('ZdjeciaComponent', () => {
  let component: ZdjeciaComponent;
  let fixture: ComponentFixture<ZdjeciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZdjeciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZdjeciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
