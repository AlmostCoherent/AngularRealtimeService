import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDataConsumerComponent } from './live-data-consumer.component';

describe('LiveDataConsumerComponent', () => {
  let component: LiveDataConsumerComponent;
  let fixture: ComponentFixture<LiveDataConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDataConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDataConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
