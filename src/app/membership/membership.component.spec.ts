import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipJoinComponent } from './membership-join.component';

describe('MembershipJoinComponent', () => {
  let component: MembershipJoinComponent;
  let fixture: ComponentFixture<MembershipJoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembershipJoinComponent]
    });
    fixture = TestBed.createComponent(MembershipJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
