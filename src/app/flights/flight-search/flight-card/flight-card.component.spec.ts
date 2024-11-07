import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClass } from '@angular/common';
import { Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightCardComponent } from './flight-card.component';

@Pipe({
  name: 'date',
  standalone: true,
})
export class DummyPipe {
  transform(v: any) {
    return v;
  }
}

describe('FlightCardComponent', () => {
  let component: FlightCardComponent;
  let fixture: ComponentFixture<FlightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightCardComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'), // jest.fn()
          },
        },
        {
          provide: ActivatedRoute,
          useValue: 'ACTIVATED_ROUTE',
        },
      ],
    })
      .overrideComponent(FlightCardComponent, {
        set: {
          imports: [NgClass, DummyPipe],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FlightCardComponent);
    component = fixture.componentInstance;

    component.flight = {
      from: 'FROM',
      to: 'TO',
      id: 'ID',
      date: 'DATE',
    } as any;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
