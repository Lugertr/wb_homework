import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiFirstComponent } from './li-first.component';

describe('LiFirstComponent', () => {
  let component: LiFirstComponent;
  let fixture: ComponentFixture<LiFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
