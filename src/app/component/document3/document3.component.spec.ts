import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Document3Component } from './document3.component';

describe('Document3Component', () => {
  let component: Document3Component;
  let fixture: ComponentFixture<Document3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Document3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Document3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
