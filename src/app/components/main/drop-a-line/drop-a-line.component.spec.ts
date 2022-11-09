import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropALineComponent } from './drop-a-line.component';

describe('DropALineComponent', () => {
  let component: DropALineComponent;
  let fixture: ComponentFixture<DropALineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropALineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropALineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
