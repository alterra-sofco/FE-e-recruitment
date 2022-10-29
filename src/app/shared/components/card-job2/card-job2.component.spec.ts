import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardJob2Component} from './card-job2.component';

describe('CardJob2Component', () => {
  let component: CardJob2Component;
  let fixture: ComponentFixture<CardJob2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardJob2Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardJob2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
