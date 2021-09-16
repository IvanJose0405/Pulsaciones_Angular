import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasRegistroComponent } from './personas-registro.component';

describe('PersonasRegistroComponent', () => {
  let component: PersonasRegistroComponent;
  let fixture: ComponentFixture<PersonasRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
