import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardSeulComponent } from './wizard-seul.component';

describe('WizardSeulComponent', () => {
  let component: WizardSeulComponent;
  let fixture: ComponentFixture<WizardSeulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardSeulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardSeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
