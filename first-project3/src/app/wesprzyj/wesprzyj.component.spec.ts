import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesprzyjComponent } from './wesprzyj.component';

describe('WesprzyjComponent', () => {
  let component: WesprzyjComponent;
  let fixture: ComponentFixture<WesprzyjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WesprzyjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WesprzyjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
