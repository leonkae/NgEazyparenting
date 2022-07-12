import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalhubComponent } from './medicalhub.component';

describe('MedicalhubComponent', () => {
  let component: MedicalhubComponent;
  let fixture: ComponentFixture<MedicalhubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalhubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
