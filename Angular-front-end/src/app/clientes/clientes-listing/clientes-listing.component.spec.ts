import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesListingComponent } from './clientes-listing.component';

describe('ClientesListingComponent', () => {
  let component: ClientesListingComponent;
  let fixture: ComponentFixture<ClientesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
