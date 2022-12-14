import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInfoContainerComponent } from './log-info-container.component';

describe('LogInfoContainerComponent', () => {
  let component: LogInfoContainerComponent;
  let fixture: ComponentFixture<LogInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInfoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
