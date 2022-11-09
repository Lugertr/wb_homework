import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLinksComponent } from './modal-links.component';

describe('ModalLinksComponent', () => {
  let component: ModalLinksComponent;
  let fixture: ComponentFixture<ModalLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
