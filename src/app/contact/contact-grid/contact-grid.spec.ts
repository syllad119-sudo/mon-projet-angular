import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGrid } from './contact-grid';

describe('ContactGrid', () => {
  let component: ContactGrid;
  let fixture: ComponentFixture<ContactGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
