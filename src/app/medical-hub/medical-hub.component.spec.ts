import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHubComponent } from './medical-hub.component';

describe('MedicalHubComponent', () => {
  let component: MedicalHubComponent;
  let fixture: ComponentFixture<MedicalHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
