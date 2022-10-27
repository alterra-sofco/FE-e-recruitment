import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepHomepageComponent} from './step-homepage.component';

describe('StepHomepageComponent', () => {
  let component: StepHomepageComponent;
  let fixture: ComponentFixture<StepHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepHomepageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StepHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
