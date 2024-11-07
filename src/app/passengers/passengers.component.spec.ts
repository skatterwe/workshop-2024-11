import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { PassengersComponent } from './passengers.component';

describe('PassengersComponent', () => {
  let component: PassengersComponent;
  let fixture: ComponentFixture<PassengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PassengersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // MANIPULATE COMPONENT FOR TEST SETUP HERE
    //...

    // TRIGGER ON_INIT
    fixture.detectChanges();

    // update template with changes from component
    fixture.detectChanges();
    fixture.detectChanges();
    fixture.detectChanges();
    fixture.detectChanges();
    fixture.detectChanges();

    // EXPECTATIONS
    expect(component).toBeTruthy();
  });

  it('should have initial value of 0', () => {
    fixture.detectChanges();

    const elem = fixture.debugElement.query(By.css('div'));
    expect(elem.nativeElement.textContent).toContain('count: 0');
  });

  it('should not be able to decrease if 0', () => {
    fixture.detectChanges();
    const decreaseBtn = fixture.debugElement.query(By.css('[data-testid="decrease-btn"]'));
    expect(decreaseBtn).toBeNull();
  });

  it('should increase counter on button click', () => {
    fixture.detectChanges();

    const increaseBtn = fixture.debugElement.query(By.css('[data-testid="increase-btn"]'));
    increaseBtn.triggerEventHandler('click');

    expect(component.counter).toEqual(1);

    fixture.detectChanges();

    const countElem = fixture.debugElement.query(By.css('div'));
    expect(countElem.nativeElement.textContent).toContain('count: 1');
  });

  it('should decrease counter on button click', () => {
    component.counter = 1;
    fixture.detectChanges();

    const decreaseBtn = fixture.debugElement.query(By.css('[data-testid="decrease-btn"]'));
    decreaseBtn.triggerEventHandler('click');

    expect(component.counter).toEqual(0);
  });
});
