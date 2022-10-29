import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageJobDetailComponent } from './homepage-job-detail.component';

describe('HomepageJobDetailComponent', () => {
  let component: HomepageJobDetailComponent;
  let fixture: ComponentFixture<HomepageJobDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageJobDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
