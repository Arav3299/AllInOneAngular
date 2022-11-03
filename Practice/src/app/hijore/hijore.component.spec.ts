import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoreComponent } from './hijore.component';

describe('HijoreComponent', () => {
  let component: HijoreComponent;
  let fixture: ComponentFixture<HijoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
