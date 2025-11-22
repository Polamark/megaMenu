import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugeNav } from './huge-nav';

describe('HugeNav', () => {
  let component: HugeNav;
  let fixture: ComponentFixture<HugeNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HugeNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HugeNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
