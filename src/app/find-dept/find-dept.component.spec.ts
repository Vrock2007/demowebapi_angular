import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDeptComponent } from './find-dept.component';

describe('FindDeptComponent', () => {
  let component: FindDeptComponent;
  let fixture: ComponentFixture<FindDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
