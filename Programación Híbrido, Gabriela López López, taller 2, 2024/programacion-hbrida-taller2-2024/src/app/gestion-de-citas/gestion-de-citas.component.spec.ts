import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GestionDeCitasComponent } from './gestion-de-citas.component';

describe('GestionDeCitasComponent', () => {
  let component: GestionDeCitasComponent;
  let fixture: ComponentFixture<GestionDeCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GestionDeCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionDeCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
