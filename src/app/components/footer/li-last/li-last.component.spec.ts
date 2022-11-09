import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiLastComponent } from './li-last.component';

describe('LiLastComponent', () => {
  let component: LiLastComponent;
  let fixture: ComponentFixture<LiLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiLastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
