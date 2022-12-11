import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInformationContainerComponent } from './app-information-container.component';

describe('AppInformationContainerComponent', () => {
  let component: AppInformationContainerComponent;
  let fixture: ComponentFixture<AppInformationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInformationContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInformationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
